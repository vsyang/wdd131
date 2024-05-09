const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind");
const windchill = document.getElementById("windchill");

let temp = 5;
let wind = 10;
    temp = (temp * 9/5) + 32;
    wind *= 0.621371;
const calculateWindChill = (temp, wind) => {
    if((temp <= 50 && wind > 3)) {
        
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        
        return `${windChill.toFixed(1)}°F`;
    } else {
        return "N/A";
    }
};

const windChill = calculateWindChill(temp, wind);

temperature.innerHTML = `<b>Temperature: </b> ${temp}`;
windSpeed.innerHTML = `<b>Wind: </b> ${wind.toFixed(0)} mph`;
windchill.innerHTML = `<b>Wind Chill: </b> ${windChill}`;