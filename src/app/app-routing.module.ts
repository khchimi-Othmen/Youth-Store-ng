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
import {CharComponent} from "./pages/back/charities/char/char.component";
import {AddCharComponent} from "./pages/back/charities/add-char/add-char.component";
import {CharDetailComponent} from "./pages/back/charities/char-detail/char-detail.component";
import {EditCharComponent} from "./pages/back/charities/edit-char/edit-char.component";
import {DashboardComponent} from "./pages/back/dashboard/dashboard/dashboard.component";
import {MainComponent} from "./pages/front/test/main/main.component";
import {CartComponent} from "./pages/back/cart/cart/cart.component";
import {ItemUComponent} from "./pages/front/item/item-u/item-u.component";
import {StoreComponent} from "./pages/front/storeMain/store/store.component";
import {CatDetailsStoreComponent} from "./pages/front/storeMain/cat-details-store/cat-details-store.component";
import {AddToCartComponent} from "./pages/front/cart/add-to-cart/add-to-cart.component";
import {CartMainComponent} from "./pages/front/cart/cart-main/cart-main.component";
import {ItemDetailsUserComponent} from "./pages/front/item-details-user/item-details-user.component";
import {TestComponent} from "./test/test.component";
import {TesttttComponent} from "./testttt/testttt.component";
import {InvoiceUpdateComponent} from "./pages/front/invoice/invoice-update/invoice-update.component";
import {SimpleDashComponent} from "./pages/back/dashboard/simple-dash/simple-dash.component";

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'mat', component: MainComponent },

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
      { path: 'char', component: CharComponent },
      { path: 'addChar', component: AddCharComponent },
      { path: 'detailsChar/:id', component: CharDetailComponent },
      { path: 'editChar/:id', component: EditCharComponent },
      { path: 'dash', component: DashboardComponent },
      { path: 'sdash', component: SimpleDashComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      { path: '', component: BodyUserComponent },
      { path: 'store', component: StoreComponent },
      { path: 'item', component: ItemUComponent },
      { path: 'detailsCStore/:id', component: CatDetailsStoreComponent },
      { path: 'cartM', component: CartMainComponent },
      { path: 'addCart/:id', component: AddToCartComponent },
      { path: 'detailsP/:id', component: ItemDetailsUserComponent },
      { path: 'test', component: TestComponent },
      { path: 'test2', component: TesttttComponent },
      { path: 'checkout', component: InvoiceUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
