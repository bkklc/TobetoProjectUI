import axios from "axios";

const axiosIstance = axios.create({
    baseURL: "https://api.tobeto.hoixi.com.tr/api"
})

export default axiosIstance;