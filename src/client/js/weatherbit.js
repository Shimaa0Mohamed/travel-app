const weatherbit = async () => {
    let days = Client.datee()
    //number of days between current date & date user inter...
    //for ex:if 2 then will choose the second array element of data that is have the same date that user enter
    let intDays =parseInt(days)
    //get lantitude & langitude that server send 
    const res = await fetch('http://localhost:2020/all') 
    const latLng = await res.json();
    
      let linkk =
      `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latLng.lat}&lon=${latLng.lng}&key=a21a286a57b24af7ba5e0a77163f9e76`;
  //send lan.&lng.  to weatherbit to get weather,city name, temp ..etc & convert data to json 
  getWeatherbit(linkk)
      .then(function(weatherbitData) {
          console.log("weatherbit",weatherbitData)
    //send json data to server side 
     postWeatherbit('/addd', {
            city_name: weatherbitData.city_name,
              temp:weatherbitData.data[intDays].temp,
              weather:weatherbitData.data[intDays].weather.description,
              icon:weatherbitData.data[intDays].weather.icon,
          })
      }).then(() => {
        //after function finish its work .. call the next function to make third api
          Client.pixabay();
          //updateAPI();
      })
  
  }
  //////////////////////////////////////////
  const getWeatherbit = async (linkk) => {
  //console.log(linkk)
  const res = await fetch(linkk);
  try {
      //if true
      const weatherbitData = await res.json();
      return weatherbitData;
  } catch (error) {
      console.log("error", error);
  }
  }
  
  const postWeatherbit = async (url = '', weatherbitData = {}) => {
  const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(weatherbitData)
  })
  //console.log(weatherbitData);
  
  try {
      const newData = await req.json();
      return newData;
  } catch (error) {
      console.log(error);
  }
  }
  export {
    weatherbit
}