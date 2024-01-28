import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9d30ba31cbeaad928537821c59771e23';

export const fetchWeather = async (query) => {
    // instead of getting the whole response, we only want the data part
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    
    return data;
}