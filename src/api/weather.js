const axios = require('axios');

const getWeatherData = async (latitude, longitude) => {
  const username = 'ehapp_govera';
  const password = 'g111S6hqWS';
  const baseUrl = 'https://api.meteomatics.com';
  const endPoint = '/now/weather';
  
  try {
    const url = `${baseUrl}${endPoint}?lat=${latitude}&lon=${longitude}&parameter=wind_speed_10m:ms,wind_gusts_10m_1h:ms,t_2m:C,t_max_2m_24h:C,msl_pressure:hPa,precip_1h:mm,precip_24h:mm,weather_symbol_1h:idx`;
    
    const { data } = await axios.get(url, {
      auth: {
        username,
        password
      }
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherData };
