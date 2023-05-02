// import required modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharityDto } from '../../../../dto/CharityDto';
import { CharityService } from '../../../../services/charity.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent implements OnInit {
  charity: CharityDto = new CharityDto(); // initialize a new instance of CharityDto

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charityService: CharityService
  ) {}

  ngOnInit(): void {}

  addCharity() {
    this.charityService.createCharity(this.charity).subscribe(() => {
    });
    setTimeout(() => {
      this.router.navigate(['/admin/char']);
    }, 500);
  }

  onCancel() {
    this.router.navigate(['/admin/char']);
  }
}
