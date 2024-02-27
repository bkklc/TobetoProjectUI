export default interface AddRequestCourse {
  imageId: number;
  name: string;
  description: string;
  subTypeId:number;
  startedDate:Date;
  endDate:Date;
}

export const defaultAddRequestCourse: AddRequestCourse = {
  imageId: 3,
  name: "string",
  description: "string",
  subTypeId:1,
  startedDate:new Date(),
  endDate:new Date()
};
