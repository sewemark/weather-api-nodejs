var express = require('express');
var app = express();
const port =3000;

app.get('/',function (req,res) {
   res.send("Default route");
});

app.listen(port);