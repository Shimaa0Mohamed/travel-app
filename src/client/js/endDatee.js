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
    export {
       endDatee
    }