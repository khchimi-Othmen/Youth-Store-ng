import {Component, OnInit} from '@angular/core';
import {LineCmdService} from "../services/line-cmd.service";
import {LineCmdDto} from "../dto/LineCmdDto";
import {ItemService} from "../services/item.service";
import {CommandService} from "../services/command.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  lineCmdList: LineCmdDto[];
  productNameMap = new Map<number, string>();
  totalMap = new Map<number, number>();
  commandTotal$: Observable<string>;

  constructor(
    private myService: LineCmdService,
    private itemService: ItemService,
    private commandService: CommandService
  ) {}

  ngOnInit() {
    this.myService.getAllLineCmd().subscribe((lineCmdList: LineCmdDto[]) => {
      this.lineCmdList = lineCmdList;
      for (const lineCmd of this.lineCmdList) {
        this.getProductNameAndTotal(lineCmd);
      }
    });

  }

  getProductNameAndTotal(lineCmd): void {
    this.myService.getProductNameForLineCmd(lineCmd.id).subscribe((productName) => {
      this.productNameMap.set(lineCmd.id, productName);
      lineCmd.productDto.name = productName;
    });

    this.myService.getTotalForLineCmd(lineCmd.id).subscribe((total) => {
      this.totalMap.set(lineCmd.id, total);
    });

    this.itemService.isProductRental(lineCmd.productId).subscribe((isRental) => {
      lineCmd.productDto.isRental = isRental;
    });
  }
  addToCommand(lineCmd: LineCmdDto) {
    this.myService.assignLineCmdToCommand(lineCmd.id).subscribe(
      data => {
        console.log("Line command assigned to command successfully");
      },
      error => {
        console.log("Error while assigning line command to command: " + error);
      }
    );
  }

  incrementQuantity(lineCmd: LineCmdDto) {
    console.log('Incrementing quantity of line command with ID', lineCmd.id);
    lineCmd.quantite++;
    this.myService.updateLineCmdQuantity(lineCmd.id, lineCmd.quantite).subscribe((updatedLineCmd: LineCmdDto) => {
      // Update successful, update the total
      this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
        lineCmd.total = total;
        this.totalMap.set(lineCmd.id, total);
      });
    }, (error) => {
      // Update failed, revert the increment
      lineCmd.quantite--;
      console.error('Failed to update line command quantity:', error);
    });
  }

  incrementNbrRentalPerDays(lineCmd: LineCmdDto) {
    console.log('Incrementing number of rental per days of line command with ID', lineCmd.id);
    lineCmd.nbrRentalPerDays++;
    this.myService.updateLineCmdNbrRentalPerDays(lineCmd.id, lineCmd.nbrRentalPerDays).subscribe((updatedLineCmd: LineCmdDto) => {
      // Update successful, update the total
      this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
        lineCmd.total = total;
        this.totalMap.set(lineCmd.id, total);
      });
    }, (error) => {
      // Update failed, revert the increment
      lineCmd.nbrRentalPerDays--;
      console.error('Failed to update line command number of rental per days:', error);
    });
  }

  removeFromCart(itemId: number) {
    this.myService.deleteLineCmd(itemId).subscribe(() => {
      console.log(`Item ${itemId} removed successfully`);
      window.location.reload(); // refresh the page after successful deletion
    }, error => {
      console.error(`Error removing item ${itemId}`, error);
    });
  }

  decrementQuantity(lineCmd: LineCmdDto) {
    console.log('Decrementing quantity of line command with ID', lineCmd.id);
    if (lineCmd.quantite > 1) { // make sure quantity is greater than 1 to avoid negative values
      lineCmd.quantite--;
      this.myService.updateLineCmdQuantity(lineCmd.id, lineCmd.quantite).subscribe((updatedLineCmd: LineCmdDto) => {
        // Update successful, do something with the updated line command if needed
      }, (error) => {
        // Update failed, revert the decrement
        lineCmd.quantite++;
        console.error('Failed to update line command quantity:', error);
      });
    }
  }
  decrementNbrRentalPerDays(lineCmd: LineCmdDto) {
    console.log('Decrementing number of rental per days of line command with ID', lineCmd.id);
    if (lineCmd.nbrRentalPerDays > 1) { // make sure number of rental per days is greater than 1 to avoid negative values
      lineCmd.nbrRentalPerDays--;
      this.myService.updateLineCmdNbrRentalPerDays(lineCmd.id, lineCmd.nbrRentalPerDays).subscribe((updatedLineCmd: LineCmdDto) => {
        // Update successful, do something with the updated line command if needed
      }, (error) => {
        // Update failed, revert the decrement
        lineCmd.nbrRentalPerDays++;
        console.error('Failed to update line command number of rental per days:', error);
      });
    }
  }



}
