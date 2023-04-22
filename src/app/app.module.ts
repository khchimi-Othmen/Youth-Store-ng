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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
