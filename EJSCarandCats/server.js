var express = require("express");

console.log("Checking Express", express);

var app = express();
console.log("Which app is it?", app);


app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

app.get('/', function(request, response) {

   console.log("Requested object", request);
   console.log("Response objetc object", response);
   response.render("index.html")

})

app.listen(8000, function() {

  console.log("Check it on port 8000");

})


app.get("/cars", function (request, response){

  response.render('cars');
})
app.get("/cats", function (request, response){

  response.render('cats');
})

app.get("/form", function (request, response){

  response.render('form');
  
})