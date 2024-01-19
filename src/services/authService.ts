import axiosIstance from "../utils/axiosInterceptors";



export const login = async (payload:any) => {
  try {
    const response = await axiosIstance.post(`/Auth/login`, payload);
    localStorage.setItem("Token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

  export const register = async (payload:any) => {
    try {
      const response = await axiosIstance.post(`/Auth/register`, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };