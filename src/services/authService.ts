import axiosIstance from "../utils/axiosInterceptors";

export const login = async (email: string, password: string) => {
    try {
      const response = await axiosIstance.post(`/Auth/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const register = async (firstName: string,lastName: string,email: string, password: string) => {
    try {
      const response = await axiosIstance.post(`/Auth/register`, {firstName,lastName,email, password,});
      return response.data;
    } catch (error) {
      throw error;
    }
  };