
    const API_KEY = "feea172fdeb4199e59fe34d4dc01d9f8";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchInput = document.getElementById("searchInput");
    const searchBtn   = document.getElementById("searchBtn");
    const errorMsg    = document.getElementById("errorMsg");
    const loadingMsg  = document.getElementById("loadingMsg");
    const weatherSec  = document.getElementById("weatherSection");

    const WEATHER_MAP = {
      Clouds:       { emoji: "☁️",  label: "Cloudy" },
      Clear:        { emoji: "☀️",  label: "Clear Sky" },
      Rain:         { emoji: "🌧️", label: "Rainy" },
      Drizzle:      { emoji: "🌦️", label: "Drizzle" },
      Snow:         { emoji: "❄️",  label: "Snowy" },
      Thunderstorm: { emoji: "⛈️", label: "Thunderstorm" },
      Mist:         { emoji: "🌫️", label: "Misty" },
      Fog:          { emoji: "🌫️", label: "Foggy" },
      Haze:         { emoji: "🌫️", label: "Hazy" },
    };

    async function checkWeather(city) {
      if (!city.trim()) return;

      errorMsg.style.display  = "none";
      weatherSec.style.display = "none";
      loadingMsg.style.display = "block";

      try {
        const res  = await fetch(`${API_URL}${encodeURIComponent(city)}&appid=${API_KEY}`);
        const data = await res.json();

        loadingMsg.style.display = "none";

        if (res.status === 404 || data.cod === "404") {
          errorMsg.style.display = "block";
          return;
        }

        const main    = data.weather[0].main;
        const info    = WEATHER_MAP[main] || { emoji: "🌡️", label: main };

        document.getElementById("temp").textContent    = `${Math.round(data.main.temp)}°`;
        document.getElementById("city").textContent    = data.name + (data.sys?.country ? `, ${data.sys.country}` : "");
        document.getElementById("conditionLabel").textContent = info.label;
        document.getElementById("weatherEmoji").textContent  = info.emoji;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent    = `${data.wind.speed} km/h`;

        // Re-trigger animation
        weatherSec.style.display = "none";
        void weatherSec.offsetWidth;
        weatherSec.style.display = "block";

      } catch (err) {
        loadingMsg.style.display = "none";
        errorMsg.style.display   = "block";
      }
    }

    searchBtn.addEventListener("click", () => checkWeather(searchInput.value));
    searchInput.addEventListener("keydown", e => { if (e.key === "Enter") checkWeather(searchInput.value); });
