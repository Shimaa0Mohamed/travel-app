# travel-app

## introduction

travel app is application that deal with 3apis to get information for you about the city that you wiil visit 
you first enter **_where you would travel to & the start travelling date & end travelling date_** and you will get **_city_name,  weather,  temprature  in this city in the day you will travell in and many pictures for this city and country_** 
### i used in this project HTML5 , CSS3 , vanilla js , node js ,webpack
i used webpack to  transform front-end assets such as HTML, CSS, and images ,js  and generates a dependency graph  that allowing web using a modular approach for  web application development purposes , i use 3 api , the first is geonames it takes location then give me lantitude and langitude and city name ... then i take lnt&lng and send them to weatherbit api to get  weather ,temp. according to date given , and finaly i take city_name and send t to pixabay api to get images for this city if city names isnt available in pixabay website then  we will send county name instead 

# How to install locally 
 download the project  then type
 ```
 npm i 
 ```
 in the terminal ...take sure that currently terminal path if your folder path
 
 then run 
 ```
 npm build-prod
 npm run start
 ```
 for production mode 
 and for development mode run 
 ```npm run build-de
 ```
 if you want to exit -> ctrl+c in the terminal
 
  to run test js functionality with jest test
 
 ```
 npm run test 
 ```
 to run express only without webpack
 ```
 node ./src/cerver/server.js
 ```
----------------------------------------------------------------------------------------------------------

in this project i code date checker to check that user will enter date between current date till 2weeks after it 
```
//when user finish typing the start journey date and go ahead from this input this function will occure"onblur" 
const datee =() =>{
let today = new Date().toISOString().substr(0, 10);
let userDate= document.getElementById("datee").value
const timeDiff   = new Date(userDate) - new Date(today)
//https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
const days = timeDiff / (1000 * 60 * 60 * 24);
//console.log(days)
/*if the user enter aday after 2weeks because api returns informations till only 2 weeks coming
and if he enter paste date  then else will occure*/
if(parseInt(days)< 15 && parseInt(days) >=0 ){
  return days
}
else {
  alert("enter date from today till 2 weeks after now")
document.getElementById("datee").value = today
}

```
```
//when user finish typing the end journey date and go ahead from this input this function will occure"onblur" 
const endDatee =() =>{
    let today = new Date().toISOString().substr(0, 10);
    let userDate= document.getElementById("datee").value
    let endDate= document.getElementById("endDatee").value

    const timeDiff   = new Date(endDate) - new Date(userDate)
    //https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
    const j_days = timeDiff / (1000 * 60 * 60 * 24);
    //console.log(days)
    //if user type end date smaller than start date then else will occure
    if(new Date(endDate)>=new Date(userDate)){
      return j_days
    }
    else {
      alert("end date should be greater than or equal to start date")
    document.getElementById("endDatee").value = today
    }
    
    
    
    
    }
 ```
 althou i use asyn. functions & await & fetch to deal with API and wait its results , wait for data to come in and out server side and client side 
 and to convert data to json to send it to server ..without errors 
 ```
 const handleSubmit = ()=>{

  const userCity = document.getElementById('userCity').value;
  let link = `http://api.geonames.org/searchJSON?q=${userCity}&maxRows=10&username=shimaa`;
  //send country name to geonames to get lantitude &langitude & convert data to json 
  getgeoname(link)
      .then(function(data) {
          console.log("geonames",data)
          //send json data to server side 
          postData('/add', {
              lat: data.geonames[0].lat,
              lng:data.geonames[0].lng,
              countryName:data.geonames[0].countryName
          })
      }).then(function() {
          //after function finish its work .. call the next function to make second api
          Client.weatherbit();   
      });
}
```
## Dependencies 
font awesome 
```

    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&family=Lobster&display=swap" rel="stylesheet">

```
express & cors &body-parser, ...etc
