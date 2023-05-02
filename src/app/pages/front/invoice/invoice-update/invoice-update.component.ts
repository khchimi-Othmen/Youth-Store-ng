import { Component } from '@angular/core';
import { CommandDto } from '../../../../dto/CommandDto';
import { Router } from '@angular/router';
import { CommandService } from '../../../../services/command.service';

@Component({
  selector: 'app-invoice-update',
  templateUrl: './invoice-update.component.html',
  styleUrls: ['./invoice-update.component.css']
})
export class InvoiceUpdateComponent {
  command: CommandDto;

  constructor(
    private commandService: CommandService,
    private router: Router
  ) {    this.command = new CommandDto();
  }

  updateCommand(commandDto: CommandDto) {
    this.commandService.updateCommand(commandDto).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/user/store']);
  }
}
