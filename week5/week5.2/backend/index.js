const express = require('express');
const { User, Todo } = require('./databse/db');
const { router } = require('./router/todoroutes'); 
const {userrouter}=require('./router/userroutes');
const cors=require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
/*app.use(cors({ (to restrict the request only from the my server of my frontend
)
//     origin:"https://localhost:5173"
 }))
*/

app.use('/todo', router);
app.use('/user',userrouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});




