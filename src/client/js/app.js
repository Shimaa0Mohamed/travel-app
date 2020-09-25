//function call on sumit form 
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
/* Function to GET Web API Data*/
const getgeoname = async (link) => {
    const res = await fetch(link);
    try {
        //if true
        const data = await res.json();
        return data;
    } catch (error) {
        //if there is error in try function  log it in cosloe
        console.log("error", error);
    }
}
/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
    try {
        const newData = await req.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
}

export {
    handleSubmit
}