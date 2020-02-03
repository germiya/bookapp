var express = require('express');
var path = require('path');
var http= require('http'); 
var books = require('./books.json');
var app = express();
//var neo4j = require('neo4j');
//var db = new neo4j.GraphDatabase('http://readonly:readonly@10.182.234.71:7474');


app.set('port',4000);
app.use(express.static(path.join(__dirname,'public')));
/*
app.get("/",(req, res) =>{
  res.render("build/index.html")
})*/

/*app.get("/neo4j/id",(req, res) =>{
    console.log("neo4j");
   //res.json(
    let s=   db.cypher({
        query: 'match (s:Source)-[sc:Score]-(t:Target) where  s.ID="+req.params.id+"  and sc.score>=10 return t.ID,sc.score',
    }, function (err, results) {
        if (err) throw err;
        var result = results[0];
        if (!result) {
            console.log('No rec found.');
        } else {
            //var user = result['u'];
            console.log(JSON.stringify(result, null, 4));
            return result;
            
        }
})//;) 
    //console.log(JSON.stringify(s, null, 4));
    res.json([]);
            
});*/
app.get("/books",(req, res) =>{
	res.header('Access-Control-Allow-Origin', "*");
    res.json(books)
})

app.get("/books/:id",(req, res) =>{
	res.header('Access-Control-Allow-Origin', "*");
    res.json(books[req.params.id-1])
})
http.createServer(app).listen(app.get('port'),function(){
	console.log("server listening on port : "+app.get('port'))
    //console.log(JSON.stringify(books))
})