import { useState, useEffect } from "react";
import getCurrentWeatherByQuery from "../api/weather";

const useWeather = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({})

  useEffect(() => {
    getCurrentWeatherByQuery('Brisbane')
      .then(res => setCurrentWeather(res))
      .catch(err => setError(err))
      .finally(() =>
        // setTimeout(() => {
        //   setIsLoading(false) // pretend we're no longer loading
        // }, 2000)
        setIsLoading(false) // pretend we're no longer loading
      )
  }, []);

  return { currentWeather, isLoading, error }
}

export default useWeather
