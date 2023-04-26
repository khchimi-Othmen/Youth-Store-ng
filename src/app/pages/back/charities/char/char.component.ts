import {Component, OnInit} from '@angular/core';
import {CharityDto} from "../../../../dto/CharityDto";
import {ItemService} from "../../../../services/item.service";
import {PromotionService} from "../../../../services/promotion.service";
import {ProductDto} from "../../../../dto/ProductDto";
import {CharityService} from "../../../../services/charity.service";

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit{
  charityList: CharityDto[];

  constructor(
    private charityService: CharityService,) { }

  ngOnInit(): void {
    this.charityService.getAllCharities().subscribe((data: CharityDto[]) => {
      this.charityList = data;
      console.log(data);
    });
  }

  deleteCharities(id: number) {
    if (confirm('Are you sure you want to delete this charity?')) {
      this.charityService.deleteCharity(id).subscribe(() => {
        this.charityList = this.charityList.filter(ch => ch.id !== id);
        alert('Charity deleted successfully!');
      }, error => {
        console.log(error);
        alert('An error occurred while deleting the charity.');
      });
    }
  }


}
