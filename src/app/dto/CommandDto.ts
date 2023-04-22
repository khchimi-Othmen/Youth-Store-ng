import {CharityDto} from "./CharityDto";
import {UserDto} from "./UserDto";

export class CommandDto {
  commandeNumber!: number;
  paymentMethod!: string;
  commandType!: string;
  weight!: number;
  deliveryDate!: Date;
  donation!: boolean;
  charity!: CharityDto;
  user!: UserDto;
  totalC!: number ;
  discountAmount!: number;
  ref!: string ;
}
