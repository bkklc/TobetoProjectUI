export interface GetAllUserBadge {
  id: number;
  userId: number;
  badgeId: number;
  badgeName: string;
}

export const defaultGetAllUserBadge: GetAllUserBadge = {
  id: 0,
  userId: 0,
  badgeId: 0,
  badgeName: ""
}