import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { ItemsComponent } from './pages/back/items/items/items.component';
import { EditItemsComponent } from './pages/back/items/edit-items/edit-items.component';
import { ItemsDetailsComponent } from './pages/back/items/items-details/items-details.component';
import {AddItemsComponent} from "./pages/back/items/add-items/add-items.component";
import {CatComponent} from "./pages/back/categories/cat/cat.component";
import {AddCatComponent} from "./pages/back/categories/add-cat/add-cat.component";
import {EditCatComponent} from "./pages/back/categories/edit-cat/edit-cat.component";
import {CatDetailsComponent} from "./pages/back/categories/cat-details/cat-details.component";
import {PromoComponent} from "./pages/back/promo/promo/promo.component";
import {CmdComponent} from "./pages/back/cmd/cmd/cmd.component";
import {CmdMainComponent} from "./pages/back/cmd/cmd-main/cmd-main.component";
import {AddCmdComponent} from "./pages/back/cmd/add-cmd/add-cmd.component";

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AllTemplateAdminComponent,
    children: [
      { path: '', component: BodyAdminComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'add', component: AddItemsComponent },
      { path: 'edit/:id', component: EditItemsComponent },
      { path: 'details/:id', component: ItemsDetailsComponent },
      { path: 'delete/:id', component: ItemsDetailsComponent },
      { path: 'cat', component: CatComponent },
      { path: 'addC', component: AddCatComponent },
      { path: 'editC/:id', component: EditCatComponent },
      { path: 'detailsC/:id', component: CatDetailsComponent },
      { path: 'promo/:id', component: PromoComponent },
      { path: 'cmd', component: CmdComponent },
      { path: 'addcmd', component: AddCmdComponent },
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      { path: '', component: BodyUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
