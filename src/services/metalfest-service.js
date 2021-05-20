import axios from "axios";
import {user} from "../stores";

export class MetalfestService {
    festivalList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.donation) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.donation);
        }
    }

    async getFestivals() {
        try {
            const response = await axios.get(this.baseUrl + "/api/festivals");
            this.festivalList = await response.data;
            return this.festivalList;
        } catch (error) {
            return [];
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories");
            this.categoryList = await response.data;
            return this.categoryList;
        } catch (error) {
            return [];
        }
    }

    async getFestivalDtls(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/festivals/" + id)
            this.festivalDtls = await response.data;
            return this.festivalDtls;
        } catch (error) {
            return [];
        }
    }

    async getUserDtls(email) {
        try {
            const response = await axios.get(this.baseUrl + "/api/useremail/" + email)
            this.userDtls = await response.data;
            return this.userDtls;
        } catch (error) {
            return [];
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.donation = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.donation = null;
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async addCategory(categoryName) {
        try {
            const categoryFestivals = [];
            const newCategory = {
                categoryName : categoryName,
                categoryFestivals : categoryFestivals
            };
            const response = await axios.post(this.baseUrl + "/api/categories", newCategory);
            return response.status == 201;
        } catch (error) {
            return false;
        }
    }

    async addFestival(name, city, country, latitude, longitude, description, startDate, endDate, imagefile, categoryList) {
        try {
            const newFest = {
                name : name,
                city : city,
                country: country,
                latitude: latitude,
                longitude: longitude,
                description: description,
                startDate: startDate,
                endDate: endDate,
                imagefile: imagefile,
                categoryList: categoryList
            };
            const response = await axios.post(this.baseUrl + "/api/festivals", newFest);
            return response.data.success === true;
        } catch (error) {
            return false;
        }
    }

    async getImagesTag(name) {
        try {
            const response = await axios.get(this.baseUrl + "/api/imagename/" + name);
            this.imageList = await response.data;
            return this.imageList;
        } catch (error) {
            return [];
        }
    }

    async deleteImage(id) {
        try {
            const response = await axios.delete(this.baseUrl + "/api/imagepublic/" + id);
        } catch (error) {
            return [];
        }
    }

    async deleteFestival(id) {
        try {
            const response = await axios.delete(this.baseUrl + "/api/festivals/" + id);
            console.log(response.data.success);
        } catch (error) {
            return [];
        }
    }

    async attendFestival(festID, userID) {
        try {
            const response = await axios.put(this.baseUrl + "/api/festivals/" + festID + "/" + userID);
        } catch (error) {
            return []
        }
    }



    async uploadImage(imagefile, name) {
        try {
            const image = {
                imagefile: imagefile,
                festName: name
            }
            const response = await axios.post(this.baseUrl + "/api/imageadd", image);
        } catch (error) {
            return [];
        }
    }
}
