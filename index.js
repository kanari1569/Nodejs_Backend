var express = require('express');
var app = express();
const port = 3000
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kanari:1234@cluster0.nudpp.mongodb.net/user?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

