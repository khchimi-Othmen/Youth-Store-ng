import { Component, OnInit } from '@angular/core';
import { LineCmdService } from '../../../../services/line-cmd.service';
import { LineCmdDto } from '../../../../dto/LineCmdDto';


@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {
  lineCmdList: LineCmdDto[];
  productNameMap = new Map<number, string>();
  totalMap = new Map<number, number>();
  lineCmdAddedToCommand: number;

  constructor(private myService: LineCmdService) {}

  ngOnInit() {
    this.myService.getAllLineCmd().subscribe((lineCmdList: LineCmdDto[]) => {
      this.lineCmdList = lineCmdList;
      for (const lineCmd of this.lineCmdList) {
        this.getProductNameAndTotal(lineCmd);
      }
    });
  }

  getProductNameAndTotal(lineCmd): void {
    this.myService.getProductNameForLineCmd(lineCmd.id).subscribe(productName => {
      this.productNameMap.set(lineCmd.id, productName);
      lineCmd.productDto.name = productName;
    });

    this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
      this.totalMap.set(lineCmd.id, total);
    });
  }

  incrementQuantity(lineCmd: LineCmdDto) {
    console.log('Incrementing quantity of line command with ID', lineCmd.id);
    lineCmd.quantite++;
    this.updateLineCmdQuantityAndUpdateTotal(lineCmd);
  }

  decrementQuantity(lineCmd: LineCmdDto) {
    console.log('Decrementing quantity of line command with ID', lineCmd.id);
    if (lineCmd.quantite > 1) {
      lineCmd.quantite--;
      this.updateLineCmdQuantityAndUpdateTotal(lineCmd);
    }
  }

  updateLineCmdQuantityAndUpdateTotal(lineCmd: LineCmdDto) {
    this.myService.updateLineCmdQuantity(lineCmd.id, lineCmd.quantite).subscribe((updatedLineCmd: LineCmdDto) => {
      // Update successful, update the total
      this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
        lineCmd.total = total;
        this.totalMap.set(lineCmd.id, total);
      });
    }, (error) => {
      // Update failed, revert the increment/decrement
      lineCmd.quantite--;
      console.error('Failed to update line command quantity:', error);
    });
  }
  incrementNbrRentalPerDays(lineCmd: LineCmdDto) {
    console.log('Incrementing number of rental per days of line command with ID', lineCmd.id);
    lineCmd.nbrRentalPerDays++;
    this.updateLineCmdNbrRentalPerDaysAndUpdateTotal(lineCmd);
  }

  decrementNbrRentalPerDays(lineCmd: LineCmdDto) {
    console.log('Decrementing number of rental per days of line command with ID', lineCmd.id);
    if (lineCmd.nbrRentalPerDays > 1) {
      lineCmd.nbrRentalPerDays--;
      this.updateLineCmdNbrRentalPerDaysAndUpdateTotal(lineCmd);
    }
  }

  updateLineCmdNbrRentalPerDaysAndUpdateTotal(lineCmd: LineCmdDto) {
    this.myService.updateLineCmdNbrRentalPerDays(lineCmd.id, lineCmd.nbrRentalPerDays).subscribe((updatedLineCmd: LineCmdDto) => {
      // Update successful, update the total
      this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
        lineCmd.total = total;
        this.totalMap.set(lineCmd.id, total);
      });
    }, (error) => {
      // Update failed, revert the increment/decrement
      if (lineCmd.nbrRentalPerDays > 1) {
        lineCmd.nbrRentalPerDays--;
      } else {
        lineCmd.nbrRentalPerDays++;
      }
      console.error('Failed to update line command number of rental per days:', error);
    });
  }


  addToCommand(lineCmd: LineCmdDto) {
    this.myService.assignLineCmdToCommand(lineCmd.id).subscribe(
      data => {
        console.log("Line command assigned to command successfully");
        this.lineCmdAddedToCommand = lineCmd.id;
        setTimeout(() => {
          this.lineCmdAddedToCommand = null;
        }, 3000); // remove message after 3 seconds
      },
      error => {
        console.log("Error while assigning line command to command: " + error);
      }
    );
  }

  removeFromCart(itemId: number) {
    this.myService.deleteLineCmd(itemId).subscribe(() => {
      console.log(`Item ${itemId} removed successfully`);
      window.location.reload(); // refresh the page after successful deletion
    }, error => {
      console.error(`Error removing item ${itemId}`, error);
    });
  }
  // incrementQuantity(lineCmd: LineCmdDto) {
  //   console.log('Incrementing quantity of line command with ID', lineCmd.id);
  //   lineCmd.quantite++;
  //   this.myService.updateLineCmdQuantity(lineCmd.id, lineCmd.quantite).subscribe((updatedLineCmd: LineCmdDto) => {
  //     // Update successful, update the total
  //     this.myService.getTotalForLineCmd(lineCmd.id).subscribe(total => {
  //       lineCmd.total = total;
  //       this.totalMap.set(lineCmd.id, total);
  //     });
  //   }, (error) => {
  //     // Update failed, revert the increment
  //     lineCmd.quantite--;
  //     console.error('Failed to update line command quantity:', error);
  //   });
  // }



}
