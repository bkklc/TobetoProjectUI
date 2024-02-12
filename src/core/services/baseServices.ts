import {AxiosResponse} from "axios";
import axiosInstance from "../interceptors/axiosInterceptor";


export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(): Promise<AxiosResponse<GetAllType, any>> {
		return axiosInstance.get<GetAllType>(this.apiUrl + "/getAll?PageIndex=0&PageSize=81");
	}

	getById(id: any): Promise<AxiosResponse<GetByIdType, any>> {
		return axiosInstance.get<GetByIdType>(this.apiUrl + "/getById?id=" + id);
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axiosInstance.post<AddResponseType>(this.apiUrl + "/add", request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.put<UpdateResponseType>(this.apiUrl + "/update", request);
	}

	delete(id: number) {
		return axiosInstance.delete(this.apiUrl + "/delete?id=" + id);
	}
}
