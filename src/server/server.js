//  empty JS object  as endpoint of all server data
let projectData = {};
let projectDataa = {};
let projectDataaa = {};

//to run server 
const express = require('express');
// Dependencies
const bodyParser = require('body-parser');
//  instance
const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Cors for security
const cors = require('cors');
app.use(cors());
//var https = require('follow-redirects').https;

// pointing to main project folder
app.use(express.static('dist'));
// Setup Server
const port = 2020;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});
//post
////////////////////////1st-api///////////////////////////////
//take geoname's data that we need  from client side
app.post('/add', (req, res) => {
    projectData.lat = req.body.lat;
    projectData.lng = req.body.lng;
    projectData.countryName = req.body.countryName;

});
//get
//server send geonames data to client side after store it 
app.get('/all', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});
app.get('/favicon.ico',(req, res) => { 
    res.sendStatus(204); 
});
///////////////////////////////2nd_api///////////////////////////////2/////////////
//take weatherbit's data that we need  from client side
app.post('/addd', (req, res) => {
    projectDataa.city_name = req.body.city_name;
    projectDataa.temp = req.body.temp;
    projectDataa.weather = req.body.weather;
    projectDataa.icon = req.body.icon;
});
//get
//server send weatherbit data to client side after store it
app.get('/alll', (req, res) => {
    res.send(projectDataa);
    console.log(projectDataa);
});
///////////////////////////3rd-api//////////////////////////////////////
//take pixabay's data that we need  from client side
app.post('/adddd', (req, res) => {
    projectDataaa.previewURL = req.body.previewURL;
    projectDataaa.previewURL1 = req.body.previewURL1;
    projectDataaa.previewURL2 = req.body.previewURL2;
});
//get
//server send pixabay data to client side after store it
app.get('/allll', (req, res) => {
    res.send(projectDataaa);
    console.log(projectDataaa);
});
