import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemDetailViewComponent } from './item-detail-view/item-detail-view.component';
import { AdminsViewComponent } from './admins-view/admins-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    CartListComponent,
    SignInComponent,
    SignUpComponent,
    ItemDetailViewComponent,
    AdminsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
