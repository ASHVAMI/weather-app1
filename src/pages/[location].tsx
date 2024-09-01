import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/weatherSlice';
import WeatherCard from '../components/WeatherCard';

export default function Location() {
  const router = useRouter();
  const { location } = router.query;
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state.weather.weatherData);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather(location.toString()));
    }
  }, [location, dispatch]);

  return (
    <div>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}
