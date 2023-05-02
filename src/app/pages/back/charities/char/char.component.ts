import {Component, OnInit} from '@angular/core';
import {CharityDto} from "../../../../dto/CharityDto";
import {ItemService} from "../../../../services/item.service";
import {PromotionService} from "../../../../services/promotion.service";
import {ProductDto} from "../../../../dto/ProductDto";
import {CharityService} from "../../../../services/charity.service";
import {CategoryDto} from "../../../../dto/CategoryDto";

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit{
  charityList: CharityDto[];
  currentPage = 1;
  itemsPerPage = 6;
  searchValue: any;
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
  get totalPages(): number[] {
    const totalChts = this.charityList.length;
    const totalPages = Math.ceil(totalChts / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  searchProducts() {
    this.charityService.searchCharitiesByName(this.searchValue).subscribe(
      (data: CharityDto[]) => {
        this.charityList = data;
      },
      error => {
        console.log(error);
        alert('An error occurred while searching categories.');
      }
    );
  }
}
