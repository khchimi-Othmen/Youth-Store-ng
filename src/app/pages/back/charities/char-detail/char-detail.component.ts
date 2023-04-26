import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharityDto} from "../../../../dto/CharityDto";
import {CharityService} from "../../../../services/charity.service";

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit{
  charity: CharityDto;
  id: number;

  constructor(
    private route :ActivatedRoute,
    private charityService : CharityService
  ) {
  }
  ngOnInit(): void {
    this.id =+this.route.snapshot.paramMap.get('id');
    this.charityService.getCharityById(this.id).subscribe(
      (charity)=>{
        this.charity = charity;

      }
    )
  }
}
