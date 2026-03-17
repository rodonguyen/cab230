export default function getCurrentWeatherByQuery(query) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const url = `https://api.weatherapi.com/v1/forecast.json?q=${query}&key=${apiKey}`;
  return fetch(url)
    .then((res) => res.json())
    .then(res => {
      const response = {
        city: res.location.name,
        country: res.location.country,
        last_updated: res.current.last_updated,
        temperature: res.current.temp_c,
        wind: res.current.wind_kph,
        uv: res.current.uv
      }
      // throw new Error("Something went wrong!");
      return response
    })
}