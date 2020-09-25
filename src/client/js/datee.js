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




}
export {
   datee
}