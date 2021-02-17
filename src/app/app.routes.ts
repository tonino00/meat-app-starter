import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { DetailRestaurentComponent } from "./detail-restaurent/detail-restaurent.component";
import { MenuComponent } from "./detail-restaurent/menu/menu.component";
import { ReviewsComponent } from "./detail-restaurent/reviews/reviews.component";

import { OrderSummaryComponent } from "./order-summary/order-summary.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "restaurants",
    component: RestaurantsComponent,
  },
  {
    path: "restaurants/:id",
    component: DetailRestaurentComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  { path: "order", loadChildren: './detail-restaurent/order/order.module#OrderModule' },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: "about", loadChildren: './about/about.module#AboutModule' },
];
