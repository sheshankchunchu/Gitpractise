// OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY";


// Function to get weather
function getWeather() {

    // Get city name from input
    const city = document.getElementById("cityInput").value;

    // Check if city is empty
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Create API URL
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    // Fetch data from API
    fetch(url)

        // Convert response to JSON
        .then(response => {

            if (!response.ok) {
                throw new Error("City not found");
            }

            return response.json();
        })

        // Process JSON data
        .then(data => {

            console.log(data);

            // Get required information
            const cityName = data.name;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const condition = data.weather[0].description;

            // Display information
            document.getElementById("cityName").textContent =
                cityName;

            document.getElementById("temperature").textContent =
                `Temperature: ${temperature} °C`;

            document.getElementById("humidity").textContent =
                `Humidity: ${humidity} %`;

            document.getElementById("condition").textContent =
                `Condition: ${condition}`;
        })

        // Handle errors
        .catch(error => {

            document.getElementById("cityName").textContent =
                "Error";

            document.getElementById("temperature").textContent =
                "";

            document.getElementById("humidity").textContent =
                "";

            document.getElementById("condition").textContent =
                error.message;
        });
}