import axiosInstance from "../core/interceptors/axiosInterceptor";

class AuthService {
	// modelleme
	register(model: any) {
		return axiosInstance.post("Auth/register", model)
	}

    login(model: any) {
		return axiosInstance.post("Auth/login", model);
	}
}

export default new AuthService();
