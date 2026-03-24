# Weather App 

A beautifully designed, modern weather application that provides real-time weather information for any city around the world. Built with HTML, CSS, and JavaScript, featuring a sleek glassmorphism aesthetic and smooth animations.

** Live Demo:** [https://weather-app-liard-kappa-20.vercel.app](https://weather-app-liard-kappa-20.vercel.app)

##  Features

- **Real-Time Weather Data**: Fetches accurate weather data using the OpenWeatherMap API.
- **Modern UI/UX**:
  - Glassmorphism design with a translucent card and blur effects.
  - Smooth floating orb animations in the background.
  - Dynamic appearance with weather status emojis.
- **Responsive Layout**: Designed to work smoothly on both desktop and mobile devices.
- **Detailed Information**: Displays current temperature, weather condition, humidity, and wind speed.
- **Quick Search**: Search by city name with support for 'Enter' key submission.

##  Technologies Used

- **HTML5**: Document structure.
- **CSS3**: Custom variables, flexbox/grid, animations, blur filters.
- **Vanilla JavaScript**: DOM manipulation, Async/Await for API fetching.
- **OpenWeatherMap API**: For retrieving current weather conditions.
- **Google Fonts**: Uses 'DM Sans' for general text and 'Bebas Neue' for numerical temperature displays.

##  Setup & Installation

To run this application locally, you just need a web browser. No complex build tools or servers are required!

1. **Download the project files**:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`

2. **Open the App**:
   - Simply double-click `index.html` to open it in your default web browser, or use an extension like Live Server in VS Code.

3. *(Optional)* **Change the API Key**:
   - The app uses an OpenWeatherMap API key. If the provided key hits its limit or you want to use your own, open `script.js`, locate `const API_KEY = "feea172fdeb4199e59fe34d4dc01d9f8";`, and replace the string with your own API key.

##  Future Improvements

Ideas for extending this project:
- Add a 5-day weather forecast section.
- Implement HTML5 Geolocation to automatically load weather for the user's current location.
- Toggle for Celsius and Fahrenheit.
