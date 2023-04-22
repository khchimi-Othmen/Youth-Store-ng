import { Component, OnInit } from '@angular/core';
import { CommandDto } from '../../../../dto/CommandDto';
import { CommandService } from '../../../../services/command.service';
import { CmdType } from '../../../../dto/CmdType';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.css'],
})
export class CmdComponent implements OnInit {
  protected readonly CommandTypeEnum = CmdType;
  commandList: CommandDto[];
  searchValue: string;
  isCopied = false;

  constructor(
    private commandService: CommandService,
    private router: Router,
    private clipboardService: ClipboardService
  ) {}

  ngOnInit(): void {
    this.getAllCommands();
  }

  getAllCommands(): void {
    this.commandService.getAllCommands().subscribe((data: CommandDto[]) => {
      this.commandList = data;
      console.log(data);
    });
  }

  cancelCommand(commandId: number): void {
    this.commandService.cancelCommand(commandId).subscribe((data: string) => {
      console.log(`Cancelled command ${commandId}: ${data}`);
      this.getAllCommands();
      this.router.navigate(['/admin/cmd']);
    });
  }

  deleteCommand(commandNumber: number): void {
    this.commandService.deleteCommand(commandNumber).subscribe(() => {
      console.log(`Deleted command ${commandNumber}`);
      this.getAllCommands();
    });
  }

  searchCmd(): void {
    this.commandService.getCommandByRef(this.searchValue).subscribe((command) => {
      this.commandList = [command];
    });
  }

  copyToClipboard(commandRef: string): void {
    this.clipboardService.copy(commandRef);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 1000);
  }
}
