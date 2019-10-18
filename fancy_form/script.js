const express = require('express');
const WAValidator = require('wallet-address-validator');

var bodyParser = require('body-parser')
const port = 3000;
const app = express();
const path = require('path');

app.listen(port, () => {
    console.log('this is port 3000')
});

// app.get('/', (req, res) => res.send('Hello World!'))
// app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})



// app.post('/submit', (req, res) => {
//     let address = req.body.address;
//     let amount = req.body.amount;
//     let outh = req.body.outh;



//     var valid = WAValidator.validate(address, 'BTC');
//     if (valid)
//         console.log('This is a valid address');
//     else
//         console.log('Address INVALID');
//     return;




// })



