const pixabay = async () => {
        //get city_name that server send
    const ress = await fetch('http://localhost:2020/alll') 
    const location = await ress.json();
    //get countryName that server send to choose image by country name if city name isnt availble
    const res = await fetch('http://localhost:2020/all') 
    const country = await res.json();

    let linkkk =
    `https://pixabay.com/api/?key=18344530-409c6a614d35f328975ceb626&q=${location.city_name}||${country.countryName}&image_type=photo&category=places`;
    
//send city_name &countryName   to pixabay to get image for city and if not available get image for country & convert data to json 
getPixabay(linkkk)
    .then(function(pixabayData) {
        console.log("pixabay",pixabayData)
        //send json data to server side 
        postPixabay('/adddd', {
            previewURL: pixabayData.hits[0].previewURL,
            previewURL1: pixabayData.hits[1].previewURL,
            previewURL2: pixabayData.hits[2].previewURL,
        })
    }).then(() => {
        // after get data from 3 api's and finish all process will show the user results
        updateAPI();
        
    })
}

/* Function to GET Web API Data*/
const getPixabay = async (linkkk) => {
    console.log(linkkk)
const res = await fetch(linkkk);
try {
    //if true
    const pixabayData = await res.json();
    return pixabayData;
} catch (error) {
    console.log("error", error);
}
}

/* Function to POST data */
const postPixabay = async (url = '', pixabayData = {}) => {
const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify(pixabayData)
})


try {
    const newData = await req.json();
    return newData;
} catch (error) {
    console.log(error);
}
}
const updateAPI = async () => {
    //get data that returned from first api
    const request = await fetch('/all');
     //get data that returned from second api
    const requestTwo = await fetch('/alll');
    //get data that returned from third api
    const requestThree = await fetch('/allll');
    // number of journy days
    const j_days = Client.endDatee();
    try {
        const data = await request.json()
        const weatherbitData = await requestTwo.json()
        const pixabayData = await requestThree.json()
        //city name that returned from first api
        document.getElementById('dataA').innerHTML = `<i class='fas fa-hotel' style='font-size:18px ; color:#09c6f9'></i>&nbsp;${weatherbitData.city_name}`;
        //weather with icon belong to it of the first day in journy "from the second api"
        document.getElementById('dataB').innerHTML = `<img src =" https://www.weatherbit.io/static/img/icons/${weatherbitData.icon}.png" style ="width:40px"></i>&nbsp;${weatherbitData.weather}<br>`;
        //temperatuer of the first day in journy "from the second api"
        document.getElementById('dataC').innerHTML = `<i class='fas fa-temperature-low' style='font-size:18px; color:#09c6f9'></i>&nbsp;${weatherbitData.temp}`;
        document.getElementById('dataD').innerHTML = `duration of your trip is ${j_days} days`
          //images for the city /country "if city_name there is unavaile pictures for it "
        document.getElementById('a').src =`${pixabayData.previewURL}`;
        document.getElementById('b').src =`${pixabayData.previewURL1}`;
        document.getElementById('c').src =`${pixabayData.previewURL2}`;
    } catch (error) {
        console.log("error", error);
    }
};
export {
    pixabay
}