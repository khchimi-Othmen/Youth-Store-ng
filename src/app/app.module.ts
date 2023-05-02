import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { ItemsMainComponent } from './pages/back/items/items-main/items-main.component';
import { ItemsComponent } from './pages/back/items/items/items.component';
import { AddItemsComponent } from './pages/back/items/add-items/add-items.component';
import { EditItemsComponent } from './pages/back/items/edit-items/edit-items.component';
import { ItemsDetailsComponent } from './pages/back/items/items-details/items-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DeleteItemsComponent } from './pages/back/items/delete-items/delete-items.component';
import { CatComponent } from './pages/back/categories/cat/cat.component';
import { AddCatComponent } from './pages/back/categories/add-cat/add-cat.component';
import { CatDetailsComponent } from './pages/back/categories/cat-details/cat-details.component';
import { CatMainComponent } from './pages/back/categories/cat-main/cat-main.component';
import { EditCatComponent } from './pages/back/categories/edit-cat/edit-cat.component';
import { PromoComponent } from './pages/back/promo/promo/promo.component';
import { CmdComponent } from './pages/back/cmd/cmd/cmd.component';
import { CmdMainComponent } from './pages/back/cmd/cmd-main/cmd-main.component';
import { AddCmdComponent } from './pages/back/cmd/add-cmd/add-cmd.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClipboardModule } from 'ngx-clipboard';
import { CharComponent } from './pages/back/charities/char/char.component';
import { AddCharComponent } from './pages/back/charities/add-char/add-char.component';
import { CharDetailComponent } from './pages/back/charities/char-detail/char-detail.component';
import {NgOptimizedImage} from "@angular/common";
import { EditCharComponent } from './pages/back/charities/edit-char/edit-char.component';
import { DashboardComponent } from './pages/back/dashboard/dashboard/dashboard.component';
import { ChartComponent } from './pages/back/dashboard/chart/chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/front/test/main/main.component';
import { SubMainComponent } from './pages/front/test/sub-main/sub-main.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CartComponent } from './pages/back/cart/cart/cart.component';
import { ItemUComponent } from './pages/front/item/item-u/item-u.component';
import { StoreComponent } from './pages/front/storeMain/store/store.component';
import { StoreHeaderComponent } from './pages/front/storeMain/store-header/store-header.component';
import { SearchStoreComponent } from './pages/front/storeMain/search-store/search-store.component';
import { SideCatComponent } from './pages/front/storeMain/side-cat/side-cat.component';
import { CatDetailsStoreComponent } from './pages/front/storeMain/cat-details-store/cat-details-store.component';
import { NavStoreComponent } from './pages/front/storeMain/nav-store/nav-store.component';
import { SidePubComponent } from './pages/front/storeMain/side-pub/side-pub.component';
import { TopSellingComponent } from './pages/front/storeMain/bodyComp/top-selling/top-selling.component';
import { ItemPromoComponent } from './pages/front/storeMain/bodyComp/item-promo/item-promo.component';
import { ItemRandomComponent } from './pages/front/storeMain/bodyComp/item-random/item-random.component';
import { ItemsSlideComponent } from './pages/front/storeMain/bodyComp/items-slide/items-slide.component';
import { AddToCartComponent } from './pages/front/cart/add-to-cart/add-to-cart.component';
import { CartMainComponent } from './pages/front/cart/cart-main/cart-main.component';
import { ItemDetailsUserComponent } from './pages/front/item-details-user/item-details-user.component';
import {BodyStoreComponent} from "./pages/front/storeMain/body-store/body-store.component";
import { TestComponent } from './test/test.component';
import { TesttttComponent } from './testttt/testttt.component';
import { InvoiceCartComponent } from './pages/front/invoice/invoice-cart/invoice-cart.component';
import { SecondeItemRandomComponent } from './pages/front/storeMain/bodyComp/seconde-item-random/seconde-item-random.component';
import { InvoiceUpdateComponent } from './pages/front/invoice/invoice-update/invoice-update.component';
import { TotalRevenueComponent } from './pages/front/storeMain/bodyComp/total-revenue/total-revenue.component';
import { SimpleDashComponent } from './pages/back/dashboard/simple-dash/simple-dash.component';
import { TopDashComponent } from './pages/back/dashboard/top-dash/top-dash.component';
import { WorstDashComponent } from './pages/back/dashboard/worst-dash/worst-dash.component';
import { LowDashComponent } from './pages/back/dashboard/low-dash/low-dash.component';
import { TotalRevenueDashComponent } from './pages/back/dashboard/total-revenue-dash/total-revenue-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    HeaderUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    ItemsMainComponent,
    ItemsComponent,
    AddItemsComponent,
    EditItemsComponent,
    ItemsDetailsComponent,
    DeleteItemsComponent,
    CatComponent,
    AddCatComponent,
    CatDetailsComponent,
    CatMainComponent,
    EditCatComponent,
    PromoComponent,
    CmdComponent,
    CmdMainComponent,
    AddCmdComponent,
    CharComponent,
    AddCharComponent,
    CharDetailComponent,
    EditCharComponent,
    DashboardComponent,
    ChartComponent,
    MainComponent,
    SubMainComponent,
    CartComponent,
    ItemUComponent,
    StoreComponent,
    StoreHeaderComponent,
    SearchStoreComponent,
    SideCatComponent,
    CatDetailsStoreComponent,
    NavStoreComponent,
    SidePubComponent,
    BodyStoreComponent,
    TopSellingComponent,
    ItemPromoComponent,
    ItemRandomComponent,
    ItemsSlideComponent,
    AddToCartComponent,
    CartMainComponent,
    ItemDetailsUserComponent,
    TestComponent,
    TesttttComponent,
    InvoiceCartComponent,
    SecondeItemRandomComponent,
    InvoiceUpdateComponent,
    TotalRevenueComponent,
    SimpleDashComponent,
    TopDashComponent,
    WorstDashComponent,
    LowDashComponent,
    TotalRevenueDashComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ClipboardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
