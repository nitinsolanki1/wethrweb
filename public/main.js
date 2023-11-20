let time = document.querySelector(".time");
let date = document.querySelector(".date");
let input = document.getElementById("input");
let temp = document.querySelector(".mtemp");
let min_temp = document.querySelector(".mintemp");
let max_temp = document.querySelector(".maxtemp");
let logo = document.querySelector(".logo");
let button_ = document.getElementById("btnc");

console.log(time,date,min_temp,max_temp,temp,logo,input,button_)
const Currentdate =()=>{
    let a = new Date();
    let yeare = a.getFullYear()
    let tmonth = a.getMonth()
    let month = [
        "jan",
        "fab",
        "mar",
        "apr",
        "mey",
        "jun",
        "july",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec"
    ]
    let date = a.getDate()
    let tday = a.getDay()
    let day = [
        "sun",
        "mon",
        "tue",
        "wend",
        "thurs",
        "fri",
        "sat"
    ]

    let cdate = day[tday] + ", "+  month[tmonth] +" " + date +" " + yeare;
            
                return cdate

}
const currenttime = ()=>{
    let a = new Date()
    let am = "am"
    let houre = a.getHours()
    if(houre > 12)
    {
        houre = houre - 12;

    
        am="pm"
    }
    let minit = a.getMinutes()
    let ctime = houre +":" + minit +" "+am

    return ctime;
}

const fetchapi = async()=>{
    let city = input.value
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8c12e604202041881f574efe4f0e952`

    const response = await fetch(api)
    const data = await response.json()
        
    temp.innerHTML = data.main.temp
    min_temp.innerHTML = data.main.temp_min;
    max_temp.innerHTML = data.main.temp_max;  
    logo.innerHTML = data.weather[0].main;  
    console.log(data)
}

time.innerHTML = currenttime()
date.innerHTML = Currentdate()


button_.addEventListener("click", async (event)=>{
        event.preventDefault()
          if(input.value == "" ){
            alert("please enter sumthing") 
          }  
          {
            try{
                fetchapi()
            }

            catch{
                alert("Enter valid city")
            }
            }    

})