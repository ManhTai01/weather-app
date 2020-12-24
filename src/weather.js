import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "1e4fb7c685434180b243c5d58a12f401";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);

    return data;
  } catch (error) {
    throw error;
  }
};
