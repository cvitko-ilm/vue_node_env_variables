var express = require('express');
var app = express();

var env_api_url = process.env.ApiUrl;
var apiUrl = 'test';

//setting middleware
//app.use('/', express.static(__dirname + '/dist'));

// app.use((req, res, next) => {
//     res.locals.env_api_url = process.env.ApiUrl;
//     next();
// })
app.set('view engine', 'ejs');
console.log(process.env);
//console.log(app.locals);
app.locals.TEST_API_URL = "TestApi";
console.log(app.locals.TEST_API_URL);

app.get('/', function(req, res) {
    //res.render(__dirname + "/dist/index.html", {TEST_API_URL: "Test"});
    res.render(__dirname + "/dist/index.ejs", {TEST_API_URL: "Test"});
    //res.render(__dirname + "/dist", { data: { apiUrl: apiUrl} });
    //ejs.renderFile(__dirname + "/dist/index.ejs", {TEST_API_URL:'test'});
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
