import axiosIstance from "../utils/axiosInterceptors";

export const login = async (email: string, password: string) => {
    try {
      const response = await axiosIstance.post(`/Auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };