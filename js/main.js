var apiKey = '3e5f641ec8cd1f75806a0ee11ffa7c7e'
let temp = document.querySelector('.weather-temp')
let drop = document.querySelector('.dropbtn')
let locaion=document.querySelector('.location')
let wind=document.querySelector(".wind .value")
let hum=document.querySelector(".humidity .value")
let desc=document.querySelector(".weather-desc")
let date1=document.querySelector('.date-day')
let date=new Date();
let month = date.toLocaleString('en-US', { month: 'long' })
let day = date.getDate()
let year=date.getFullYear()
let today = day + ' ' + month+' '+year
function CountryAPI(country){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => {
           
          console.log(data)
          temp.innerHTML = Math.floor(data.main.temp) + ' c'
          locaion.innerHTML=`${country} ,`+` ${data.sys.country}`
          wind.innerHTML=data.wind.speed+" km/h"
          hum.innerHTML=data.main.humidity
          desc.innerHTML=data.weather[0].main;
          date1.innerHTML=`${today} `
        })
}
drop.onchange = function () {
  CountryAPI(drop.value);
 
}
CountryAPI(drop.value);
