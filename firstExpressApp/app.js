var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function(request, response) {
	response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
	console.log("Someone is making a request to /dog");
	res.send("MEOW!");
})


// Tell Express to listen for requests (start server)


app.listen(3000, function() {
	console.log("Server has started!!!");
})