

    
    let fs = require("fs")
    let requests = require('requests');
    let html = fs.readFileSync("index.html","utf-8")
    let jsonfile = fs.readFileSync("api.json","utf-8")
    let http = require("http")
    // let document = require("document")
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
    // city = document.querySelector(".top h4 span").innerHTML


    let server = http.createServer((req,res)=>{
             if(req.url == "/"){         
                requests(`https://api.openweathermap.org/data/2.5/weather?q=Junagadh&appid=e8c12e604202041881f574efe4f0e952`)
                .on('data',  (nodata)=> {
                let data = JSON.parse(nodata)
                            let temp = data.main.temp;   
                            let mintemp = data.main.temp_min;   
                            let maxtemp = data.main.temp_max;   
                            let  logo = data.weather[0].main
                            let description =  data.weather[0].description


                            html =  html.replace("{sun}",logo)
                            html =  html.replace("{maxtemp}",maxtemp)
                            html =  html.replace("{mintamp}",mintemp)
                            html = html.replace("{temp}",temp) 
                            html =  html.replace("{date}",Currentdate())
                            html = html.replace("{time}",currenttime())
                            console.log("succesfull")
                            html5 =  html.replace("london","kis").search("ok")
                            console.log(html5)
                            res.end(html)
            
                // res.end("ok")
                })
            }
                
        });

            

    server.listen("8000","127.0.0.1",()=>{
        console.log("server is start")
    })

