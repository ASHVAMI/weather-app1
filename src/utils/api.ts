import axios from 'axios';
import { WeatherData } from '../types';
import { WEATHER_API_BASE_URL, API_KEY } from './constants';

export async function fetchWeatherData(location: string) {
  const response = await axios.get<WeatherData>(`${WEATHER_API_BASE_URL}?q=${location}&appid=${API_KEY}`);
  return response;
}
