export interface Users {
  data: [User];
}

export interface User {
  id: string;
  isBlock: boolean;
  isAdmin: boolean;
  image: string | null;
  username: string;
  displayName: string;
  channelName: null;
  bio: string | null;
  email: string;
  mobileNumber: string;
  landmark: string;
  addressLine1: string;
  addressLine2: string;
  countryId: string;
  stateId: string;
  cityId: string;
  resetToken: string;
  suspendTill: string;
  deletedAt: string;
  updatedAt: string;
  createdAt: string;
}
