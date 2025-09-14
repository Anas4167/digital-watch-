const day=document.querySelector("#day")
const month=document.querySelector("#month")
const year=document.querySelector("#year")
const hour=document.querySelector("#hour")
const minute=document.querySelector("#minute")
const second=document.querySelector("#second")
const AmPm=document.querySelector("#AmPm")


const monthsName=["January" , "Febuary", "Martch", "April", "May", "June", "July", 
    "Agust", "September", "October", "Novermber", "December"]

function clock(){
    const dateTime= new Date()


    day.innerHTML=dateTime.getDate()
    month.innerHTML=monthsName[dateTime.getMonth()]
    year.innerHTML=dateTime.getFullYear()
    dateTime.getHours() %12 < 10 ? hour.innerHTML=`0${dateTime.getHours() %12 + " :"}` : hour.innerHTML=dateTime.getHours() %12 + " :"

    // if(dateTime.getHours() %12 < 10 ){
    //     hour.innerHTML=`0${dateTime.getHours() %12}`

    // }else{
    //     hour.innerHTML=dateTime.getHours() %12 + " :"
    // }

    // minute.innerHTML=String(dateTime.getMinutes() ).padStart(2,"0")+" :"
    
    if(dateTime.getMinutes()  <10){
        minute.innerHTML=`0${dateTime.getMinutes() + " :" }`

    }else{
        minute.innerHTML=dateTime.getMinutes() +" :"
    }
    second.innerHTML= String(dateTime.getSeconds()).padStart(2,"0") 

    dateTime.getHours() > 12? AmPm.innerHTML="PM" : AmPm.innerHTML="AM"
}
setInterval(clock)

