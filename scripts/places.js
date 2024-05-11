function calculateWindChill() {
    // Get temperature and wind speed from spans
    var temperature = parseFloat(document.getElementById("tempData").textContent);
    var windSpeed = parseFloat(document.getElementById("windSpeedData").textContent);

    // Check if temperature is 10°C or less
    if (temperature <= 10) {
        // Calculate wind chill
        var windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + " °C"; // Return wind chill rounded to 2 decimal places with unit
    } else {
        return "N/A"; // Return N/A if temperature is greater than 10°C
    }
}

// Call the function and update the content of the span with id windChillData
var windChillResult = calculateWindChill();
document.getElementById("windChillData").textContent = windChillResult;