

const Weather = ({ currentWeather }) => (
    <>
        <h4>Location: {currentWeather.city}, {currentWeather.country}</h4>
        <p style={{ color: 'gray', fontSize: '14px' }}>Last updated at: {currentWeather.last_updated}</p>
        <p>{new Date().toLocaleString()}</p>
        <p>Temperature (C): {currentWeather.temperature}</p>
        <p>Wind Km/h: {currentWeather.wind}</p>
        <p>UV index: {currentWeather.uv}</p>
    </>
)

export default Weather;

