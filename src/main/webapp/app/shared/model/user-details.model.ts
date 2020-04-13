import { Moment } from 'moment';
import { IUser } from 'app/shared/model/user.model';

export interface IUserDetails {
  id?: number;
  mobileNumber?: string;
  dateOfBirth?: Moment;
  oneToOne?: IUser;
}

export const defaultValue: Readonly<IUserDetails> = {};
