import './App.css'
import useWeather from './callbacks/useWeather';
import Weather from './components/Weather';

// https://codeshare.io/Gq6vbA
function App() {
  const { currentWeather, error, isLoading } = useWeather();

  // TODO: add input and a query button
  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> :
        error !== '' ? JSON.stringify(error) :
          <>
            <h1>Weather App</h1>
            <Weather currentWeather={currentWeather}/>
          </>}
    </div>
  )
}

export default App
