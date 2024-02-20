import axios from "axios";

class FileService{
    upload(file:FormData) {
		return axios.post("https://hoixi.com.tr/api/FileUpload", file,{
			headers:{
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export default new FileService();











