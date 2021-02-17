import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { SharedModule } from './shared/shared.module';

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantsService } from "./restaurants/restaurants.service";
import { DetailRestaurentComponent } from "./detail-restaurent/detail-restaurent.component";
import { MenuComponent } from "./detail-restaurent/menu/menu.component";
import { ShoppingCartComponent } from "./detail-restaurent/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./detail-restaurent/menu-item/menu-item.component";
import { ReviewsComponent } from "./detail-restaurent/reviews/reviews.component";
import { ShoppingCartService } from "./detail-restaurent/shopping-cart/shopping-cart.service";

import { OrderService } from "./detail-restaurent/order/order.service";

import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    DetailRestaurentComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
