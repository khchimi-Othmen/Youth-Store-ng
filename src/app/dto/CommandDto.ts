import {CharityDto} from "./CharityDto";
import {UserDto} from "./UserDto";
import {CmdType} from "./CmdType";

export class CommandDto {
  commandeNumber!: number;
  paymentMethod!: string;
  weight!: number;
  deliveryDate!: Date;
  donation!: boolean;
  charity!: CharityDto;
  user!: UserDto;
  totalC!: number ;
  discountAmount!: number;
  ref!: string ;
  commandType!: CmdType ;
}
