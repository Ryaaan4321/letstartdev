function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order has been taken.");
            resolve();
        }, 2000);
        console.log("arey ja na");
    });
}

function cookFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is being cooked.");
            resolve();
        }, 3000);
        console.log("khana bn gya");
    });
}

function serveFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is served!");
            resolve();
        }, 1000);
        console.log("aj k ho gya");
    });
}

// Chain the promises
takeOrder()
    .then(cookFood)
    .then(serveFood)
    .catch((error) => {
        console.log("Error: " + error);
    });
