import {Client} from 'pg';

export async function getClient(){
    const client=new Client("postgresql://neondb_owner:npg_IYyg7mAp0NoP@ep-old-tooth-a8dt8acn-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")
    await client.connect();
    return client;
} 

// psql -U aryan -d neondb
