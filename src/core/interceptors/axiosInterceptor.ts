import axios from "axios";
import {BASE_API_URL} from "../../environment/environment";
import tokenService from "../services/tokenService";
import { handleError } from "../errorHandlers/errorHandlers";


const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use(config => {
	

	const token = tokenService.getToken();	
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		
		return response;
	},
	error => {
		handleError(error);
		return error;
	},
);

export default axiosInstance;
