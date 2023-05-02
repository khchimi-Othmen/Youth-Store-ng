import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SubMainComponent} from "../sub-main/sub-main.component";
import {ItemService} from "../../../../services/item.service";
import {ProductDto} from "../../../../dto/ProductDto";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  displayedColumns: string[] = ['productId', 'name', 'description', 'price', 'producer', 'available', 'promotion', 'quantityAvailable', 'isRental', 'sales', 'category','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private _dialog: MatDialog,
                private service: ItemService,
              ) {
   }


  ngOnInit(): void {
    this.getItemList();
  }
  openAddEditForm(){
     this._dialog.open(SubMainComponent);
   }
   getItemList(){
     this.service.getAllProducts().subscribe(
       (data: ProductDto[]) => {
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
    this.service.deleteProduct(productId).subscribe({
      next: (data)=>{
        alert('Item Deleted');
        this.getItemList();
      },
      error:console.log,
    })
  }

  openEditForm(data:any){
    this._dialog.open(SubMainComponent,{
      data,
    });
  }
}
