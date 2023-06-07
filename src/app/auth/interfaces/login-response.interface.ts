import { User } from "./user.interface";

export interface Loginresponse {
  user:  User;
  token: string;
}
