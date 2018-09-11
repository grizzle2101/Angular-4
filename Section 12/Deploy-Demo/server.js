
const express = require('express');
const app = express(); //Create App

app.use(express.static(__dirname + '/dist')); //Serve the WebSite

//In a Real application we would be adding all our API endpoints here.
//Or in a more complex application, we might have Courses.js, messages.js etc all the service side API components.
//Using whatever database you have Mongo or SQL.

//Catching all Invalid Routes
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

//Listen for Requests
app.listen(process.env.PORT || 8080);