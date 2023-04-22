import { Component, OnInit } from '@angular/core';
import { CommandDto } from '../../../../dto/CommandDto';
import { CommandService } from '../../../../services/command.service';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.css']
})
export class CmdComponent implements OnInit {
  commandList: CommandDto[];

  constructor(private commandService: CommandService) {}

  ngOnInit(): void {
    this.commandService.getAllCommands().subscribe((data: CommandDto[]) => {
      this.commandList = data;
      console.log(data);
    });
  }
}
