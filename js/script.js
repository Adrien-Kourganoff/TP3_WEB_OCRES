function start() {
var city = document.getElementById("city-input").value;
if(city === ""){
  city = "paris";
}
// Création de l'objet apiWeather
const apiWeather = new API_WEATHER(city);

apiWeather

    .fetchThreeDaysForecast(city)
    .then(function(response) {

        console.log(response.data);
        // Récupère la donnée d'une API
        const data = response.data;

        for(i = 0; i <= 3; i++) {
            htmlElement = "today";
            if(i == 1) {
                htmlElement = "jour1";
            }
            else if(i == 2) {
                htmlElement = "jour2";
            }
            else if(i == 3) {
                htmlElement = "jour3";
            }
            // On récupère l'information principal
            const main = data.list[i].weather[0].main;
            const description = data.list[i].weather[0].description;
            const temp = data.list[i].temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

            // Modifier le DOM
            document.getElementById(htmlElement+'-forecast-main').innerHTML = main;
            document.getElementById(htmlElement+'-forecast-more-info').innerHTML = description;
            document.getElementById(htmlElement+'-icon-weather-container').innerHTML = icon;
            document.getElementById(htmlElement+'-forecast-temp').innerHTML = `${temp}°C`;
        }
    })
    .catch(function(error) {

        // Affiche une erreur
        console.error(error);
    });
}