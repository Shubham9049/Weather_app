const apiKey="b2231be583ac20baafd24b5deece1d5d"
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchPlace=document.querySelector(".search input");
const Searchbutton=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")


function CheckWeather(city){
 try {
    fetch(ApiUrl+city+`&appid=${apiKey}`)
    .then(Response=>Response.json())
    .then(result=>{
        console.log(result)
        Display(result)
    })
 } catch (error) {
    console.log("An error accrued")
 }
}

Searchbutton.addEventListener("click",()=>{
    CheckWeather(SearchPlace.value)
}
)





function Display(result){
    document.querySelector(".city").innerHTML=result.name;
    document.querySelector(".temp").innerHTML=Math.round(result.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=result.main.humidity+"%";
    document.querySelector(".wind").innerHTML=result.wind.speed+"Km/h";
    document.querySelector(".main").innerHTML=result.weather[0].main;

    
    if(result.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(result.weather[0].main=="Clear" ){
        weatherIcon.src="images/clear.png";
    }
    else if(result.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(result.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(result.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(result.weather[0].main=="snow"){
        weatherIcon.src="images/snow.png";
    }
}
