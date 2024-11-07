const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const userdetails = [{
    name: "aryan",
    kidneys: [
        {
            ishealthy: 1,
        },
        {
            ishealthy: 0
        }
    ]
}, {
    name: "aryaaa",
    kidneys: [
        {
            ishealthy: 1
        },
        {
            ishealthy: 0
        }
    ]
}];

// GET route
app.get('/', function (req, res) {
    const johnkidney = userdetails[0].kidneys;
    const numberofkideny = johnkidney.length;
    let numberofhealthykidney = 0;
    
    for (let i = 0; i < numberofkideny; i++) {
        if (johnkidney[i].ishealthy) {
            numberofhealthykidney++;
        }
    }

    const unhealthykidney = numberofkideny - numberofhealthykidney;

    res.json({
        numberofkideny,
        numberofhealthykidney,
        unhealthykidney
    });
});

// POST route
app.post('/post', function (req, res) {
    console.log(req.body); 

    const healthykidney = req.body.ishealthy;

    if (healthykidney === undefined) {
        return res.status(400).json({ msg: "ishealthy field is missing" });
    }

    userdetails[0].kidneys.push(
        { ishealthy: healthykidney },
        { ishealthy: healthykidney }
    );

    res.json({ msg: "surgery is done" });
});
app.put('/put', function(req, res) {
    
    for (let i = 0; i < userdetails[0].kidneys.length; i++) {
        userdetails[0].kidneys[i].ishealthy = 1;
    }

    res.json({ msg: "All kidneys updated", kidneys: userdetails[0].kidneys });
});

app.delete('/delete', function(req, res) {
    const arr = [];
    for (let i = 0; i < userdetails.length; i++) {
        for (let j = 0; j < userdetails[i].kidneys.length; j++) {
            if (userdetails[i].kidneys[j].ishealthy) {
                arr.push({
                    user: userdetails[i].name,
                    healthy: 1
                });
            }
        }
        userdetails[i].kidneys=arr;
    }
    res.json({
        msg: arr
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
