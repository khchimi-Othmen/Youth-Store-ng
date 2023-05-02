import {CharityDto} from "./CharityDto";
import {UserDto} from "./UserDto";
import {CmdType} from "./CmdType";

export class CommandDto {
  commandeNumber!: number;
  commandType!: CmdType ;
  paymentMethod!: string;
  donation!: boolean;
  user!: UserDto;
  ref!: string ;

  // weight!: number;
  deliveryDate!: Date;
  charity!: CharityDto;
  totalC!: number ;
  discountAmount!: number;
}
