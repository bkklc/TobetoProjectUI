import axios from "axios";

const axiosIstance = axios.create({
    baseURL: "http://localhost:5062/api"
})

export default axiosIstance;