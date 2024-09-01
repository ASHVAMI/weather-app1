import { WeatherData } from '../types';

interface WeatherCardProps {
  weatherData: WeatherData | null;
}

export default function WeatherCard({ weatherData }: WeatherCardProps) {
  if (!weatherData) return null;

  return (
    <div className="p-4 bg-white shadow rounded mt-10">
      <h2 className="text-2xl">{weatherData.location}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Condition: {weatherData.condition}</p>
      {/* Add more weather details here */}
    </div>
  );
}
