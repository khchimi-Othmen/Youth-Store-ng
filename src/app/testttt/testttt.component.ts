import { Component, OnInit } from '@angular/core';
import { CommandService } from '../services/command.service';
import { CommandDto } from '../dto/CommandDto';
import { timer } from 'rxjs';
import {LineCmdService} from "../services/line-cmd.service";
import {ProductDto} from "../dto/ProductDto";
import {DashboardService} from "../services/dashboard.service";

@Component({
  selector: 'app-testttt',
  templateUrl: './testttt.component.html',
  styleUrls: ['./testttt.component.css']
})
export class TesttttComponent implements OnInit{

  constructor(
    private commandService: CommandService,
              ) {}

  ngOnInit(): void {

  }
  finalizeCommand() {
    this.commandService.finalizeCommand().subscribe((response) => {
      console.log(response);
    });
  }

}
