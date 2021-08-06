const searchBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.display-container');
const input = document.querySelector('.input');

const api_key = "dd8d12ec4d52152f1dd3df0af9cff54c";

input.focus();

function searchCities(city_name){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`)
    .then(response => response.json())
    .then(data => {
        
        if(data.cod != 400){
            alert("Please Enter Correct City.");
            return;
        }
        const {main , name , sys , weather , wind} = data;
        
        container.innerHTML+=`
        <div class="display-box">
            <div class= "city-wind">
            <div class="city">${name}</div>
            <div class="wind"><i class="fas fa-wind"></i>  ${wind.speed}m/s</div>
            </div>
            <div class="icon">
                <img src="https://www.openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="icon">
            </div>
            <div class="temp-box">
                <div class="temp">${Math.round(main.temp)}℃</div>
            </div>
            <div class="climate">${weather[0].description}</div>
    </div>`;

    });
    
}

searchBtn.addEventListener('click',()=>{
    const city_name = document.querySelector('.input').value;

    searchCities(city_name);

})

