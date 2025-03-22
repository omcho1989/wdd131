const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;

function calculateWindChill(temp, windSpeed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}


//use AI to see how to use both temp and windspead. Inserted &&
function displayWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) { 
        const windChill = calculateWindChill(temp, windSpeed);
        document.querySelector("#windChill").textContent = `${windChill.toFixed(2)} °F`;
    } else {
        document.querySelector("#windChill").textContent = "N/A"; 
    }
}

//call it in the html document.
const temperature = 45;
const windSpeed = 5
displayWindChill(temperature, windSpeed);