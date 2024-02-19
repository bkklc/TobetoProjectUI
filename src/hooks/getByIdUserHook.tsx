
import userService from '../services/userService';
import tokenDecode from './tokenDecode';


    const GetByLoginUserData = async (state:any) => {
      try {
        const response = await userService.getById(tokenDecode().ID);
        state(response.data)
      } catch (error) {
        console.error("Veri çekme sırasında bir hata oluştu:", error);
      }
    };


export default GetByLoginUserData;


