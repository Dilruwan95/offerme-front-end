import { WishListService } from './services/wish-list.service';
import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarModule } from 'angular-bootstrap-md'
import { CardsFreeModule, DropdownModule} from 'angular-bootstrap-md';
import { ModalModule, InputsModule } from 'angular-bootstrap-md'
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ModelRegComponent } from './components/model-reg/model-reg.component';
import { ModelLogComponent } from './components/model-log/model-log.component';
import { NotificationComponent } from './components/notification/notification.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OfferMeDetailsComponent } from './components/offer-me-details/offer-me-details.component';
import { NavbarNotlogComponent } from './components/navbar-notlog/navbar-notlog.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { ItemComponent } from './components/item/item.component';
import { OrderService } from './services/order.service';
import { CategoryComponent } from './components/category/category.component';
import { CreateAdvertisementComponent } from './components/create-advertisement/create-advertisement.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    UserEditComponent,
    ModelRegComponent,
    ModelLogComponent,
    NotificationComponent,
    WishListComponent,
    OrdersComponent,
    OfferMeDetailsComponent,
    NavbarNotlogComponent,
    AllItemsComponent,
    ItemComponent,
    CategoryComponent,
    CreateAdvertisementComponent
  ],
  imports: [
    ButtonsModule,
    CarouselModule.forRoot(),
    DropdownModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    NavbarModule,
    WavesModule.forRoot(),
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CarouselModule.forRoot(),
    DropdownModule.forRoot(),
    CardsFreeModule,
    AppRoutingModule
  ],
  providers: [AuthService, ItemService, OrderService, WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
