import {Component, OnInit} from '@angular/core';
import {CharityDto} from "../../../../dto/CharityDto";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoriesService} from "../../../../services/categories.service";
import {CharityService} from "../../../../services/charity.service";

@Component({
  selector: 'app-edit-char',
  templateUrl: './edit-char.component.html',
  styleUrls: ['./edit-char.component.css']
})
export class EditCharComponent  implements OnInit {
  id: number;
  charity: CharityDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charityService: CharityService
  ) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.charityService.getCharityById(this.id).subscribe((charity) => {
      this.charity = charity;
    });
  }

  updateCharity() {
    this.charityService.updateCharity(this.id,this.charity).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/admin/char']);
      }, 500);
    });
  }

  onCancel() {
    this.router.navigate(['/admin/char']);

  }
}
