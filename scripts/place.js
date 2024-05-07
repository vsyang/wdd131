const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind");
const windchill = document.getElementById("windchill");

let temp = 5;
let wind = 10;
    temp = (temp * 9/5) + 32;
    wind = (wind * 0.621371).toFixed(0);
const calculateWindChill = (temp, wind) => {
    if((temp <= 50 && wind > 3)) {
        

        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        
        return windChill.toFixed(1);
    } else {
        return "N/A";
    }
};

const windChill = calculateWindChill(temp, wind);
console.log(windChill);

temperature.innerHTML = `<strong>Temperature: </strong> ${temp}°F`;
windSpeed.innerHTML = `<strong>Wind: </strong> ${wind} mph`;
windchill.innerHTML = `<strong>Wind Chill: </strong> ${windChill}`;