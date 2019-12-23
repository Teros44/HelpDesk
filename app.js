const http = require("http");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended:false});
// Для статических файлов
app.use(express.static(__dirname+'/pages')); 
app.use(session({secret:'123444'}));

var sess;

app.post("/", urlencodedParser,function(request,response){

})

app.post("/test2",urlencodedParser,function(request,response){
let sess = request.session;
sess.login = request.body.location;
console.log(request.body);
console.log(sess.login);
console.log(sess.n);
response.send(`${request.body.location}`);
});
http.createServer(function(request, response){
		
	console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
	
	response.setHeader("UserId", "?");
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>hello world</h2>");
    response.end("Hello world!");
})
app.get("/Profile", function(request, response){
     ;
    response.send("<h1>Profile</h1>");
});
app.get("/managment", function(request, response){
     
    response.send("<h1>Managment</h1>");
});
app.get("/", function(request, response){
    sess=request.session;
    sess.login;
    sess.n;
    sess.n = 1;
	response.redirect("/home.html");
});
app.listen(3000);