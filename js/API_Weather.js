// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";

// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";

// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";

class API_WEATHER {

    // Faire la requete à l'API openweathermap
    // Retourne une promise
    

    // Retourne l'element HTML de l'icon symbolisant la méteo.
    getHTMLElementFromIcon(icon){
        return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
    }
    //pour le jour meme et les 3jours avenir cnt=4
    fetchThreeDaysForecast(city) {
        return axios
        .get(`${API_URL}?q=${city}&cnt=4&units=metric&appid=${API_KEY}`, {
          crossdomain: true
        })
    }
}