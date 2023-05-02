import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { SubMainComponent } from '../../../front/test/sub-main/sub-main.component';
import { LineCmdService } from '../../../../services/line-cmd.service';
import { LineCmdDto } from '../../../../dto/LineCmdDto';
import {ProductDto} from "../../../../dto/ProductDto";
import {CommandDto} from "../../../../dto/CommandDto";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['id', 'quantite', 'total', 'nbrRentalPerDays','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private _dialog: MatDialog,
               private service: LineCmdService,
  ) {
  }


  ngOnInit(): void {
    this.getItemList();
  }
  openAddEditForm(){
    this._dialog.open(SubMainComponent);
  }
  getItemList(){
    this.service.getAllLineCmd().subscribe(
      (data: LineCmdDto[]) => {
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator= this.paginator;
        console.log(data);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(productId: number) {
    // this.service.deleteProduct(productId).subscribe({
    //   next: (data)=>{
    //     alert('Item Deleted');
    //     this.getItemList();
    //   },
    //   error:console.log,
    // })
  }

  openEditForm(data:any){
    this._dialog.open(SubMainComponent,{
      data,
    });
  }

}
