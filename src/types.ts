export type HandlerOutput = string | number | object;

export interface UserProfileInput {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface UserProfile {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
}
