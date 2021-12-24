const express = require("express");
const app = express();
const port = 3000
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');


app.get('/user/:name', (req, res) => {
    res.render('user', { name: req.params.name })
})

app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<form action='/submit' method='POST'> <input name='data'/> <button>submit</button> <form/>")
    res.end();
})

app.post("/submit", urlencodedParser, (req, res) => {

    const response = req.body.data
    fs.appendFile(path.join(__dirname, 'data.txt'), response, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    console.log(response);
    res.end(JSON.stringify(response));
})




app.listen(port, () => {
    console.log("Responsed")
})