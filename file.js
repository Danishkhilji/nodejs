var express = require('express');
var app = express();
const port = 3000

app.get('/', (req, res)=> {
   res.setHeader("Content-Type","text/html");
   res.write("<form> <input /> <button>submit</button> <form/>")
   res.end();
})

app.get('/abc', (req, res)=> {
    res.send('Hello Sufyan');
 })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })