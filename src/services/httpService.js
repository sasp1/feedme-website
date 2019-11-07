// import config from "config";
// import config from "config";
import axios from "axios";
// const axios = require("axios");
// const config = require("config");


axios.interceptors.response.use(null, error => {
    console.log("INTERCEPTOR CALLED");

    const {response} = error;

    const expectedError = response && response.status >= 400 && response.status < 500;

    if (!expectedError) {
        alert("An unexpected error occured! :( Please try again!" + response.status);
    }

    return Promise.reject(error);
});

// const BASE_URL = process.env.BASE_URL = "PROD" ? "http://feedme.compute.dtu.dk/api" : "http://feedme.compute.dtu.dk/api-dev";

const http = axios.create({
    // baseURL:  config.get("baseServerUrl")
    baseURL: "http://feedme.compute.dtu.dk/api"
});

export default http;


