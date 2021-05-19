import axios from "axios";

export class UtilsService {

    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getWeather(location) {
        let response;
        try {
            response = await axios.get(`${this.baseUrl}/api/weather/${location}`);
            return response.data;
        } catch (error) {
            return [];
        }
    }
}
