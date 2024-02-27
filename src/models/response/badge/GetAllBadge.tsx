export interface GetAllBadge {
  id: number;
  imageId: number;
  name: string;
  imageName: string;
  imageUrl: string;
}

export const defaultGetAllBadge: GetAllBadge = {
  id: 0,
  imageId: 0,
  name: "",
  imageName: "",
  imageUrl: "",
}