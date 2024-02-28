export default interface AddRequestCourse {
  imageId: number;
  name: string;
  description: string;
  subTypeId:number;
  startedDate:Date;
  endDate:Date;
}

export const defaultAddRequestCourse: AddRequestCourse = {
  imageId: 9,
  name: "",
  description: "",
  subTypeId:0,
  startedDate:new Date(),
  endDate:new Date()
};
