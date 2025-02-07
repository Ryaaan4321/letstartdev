import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_IYyg7mAp0NoP@ep-old-tooth-a8dt8acn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
});

async function createTable() {
    try {
        await client.connect();
        const result2 = await client.query(`
            CREATE TABLE IF NOT EXISTS ADDRESS (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(200) NOT NULL,
                street VARCHAR(200) NOT NULL,
                pincode VARCHAR(20),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )`
        );
        console.log("Table created successfully:", result2);
    } catch (error) {
        console.error("Error creating table:", error);
    }
}

async function insertUserData(username: string, password: string, email: string) {
    try {
        await client.query("BEGIN");
        const result = await client.query(
            `INSERT INTO userss (username, password, email) VALUES ($1, $2, $3) RETURNING *`,
            [username, password, email]
        );
        await client.query("COMMIT");
        console.log("User inserted successfully:", result.rows);
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Error inserting user data:", error);
    }
}

async function insertAddressData(user_id: number, city: string, country: string, street: string, pincode: string) {
    try {
        await client.query("BEGIN");
        const result = await client.query(
            `INSERT INTO ADDRESS (user_id, city, country, street, pincode) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [user_id, city, country, street, pincode]
        );
        await client.query("COMMIT");
        console.log("Address inserted successfully:", result.rows);
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Error inserting address data:", error);
    }
}

async function getAllUsers() {
    try {
        const result = await client.query(`SELECT * FROM ADDRESS`);
        console.log("Address data:", result.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

(async () => {
    await createTable();
    await insertUserData("testuser", "testpassword", "test@example.com");
    await insertAddressData(1, "New York", "USA", "123 Main St", "10001");
    await getAllUsers();
    await client.end(); 
})();
