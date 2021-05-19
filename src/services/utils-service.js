import axios from "axios";

export class UtilsService {

    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getWeather(location) {
        let response;
        try {
            // let apiKey = "9ee9eafc6a1ccd63e9a1869e1ffcfa0d";
            // const weatherRequest = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
            // let weather = {};
            // const response = await axios.get(weatherRequest);
            // if (response.status == 200) {
            //     weather = response.data;
            // }
            // const report = {
            //     feelsLike: Math.round(weather.main.feels_like - 273.15),
            //     clouds: weather.weather[0].description,
            //     windSpeed: weather.wind.speed,
            //     windDirection: weather.wind.deg,
            //     visibility: weather.visibility / 1000,
            //     humidity: weather.main.humidity,
            // };
            // return report;
            response = await axios.get(`${this.baseUrl}/api/weather/${location}`);
            // console.log("Feels : " + JSON.stringify(response));
            // console.log("Feels : " + response.data.feelsLike);
            return response.data;
        } catch (error) {
            return [];
        }
    }
}
