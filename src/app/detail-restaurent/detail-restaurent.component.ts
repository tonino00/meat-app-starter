import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { Restaurant } from "../restaurants/restaurant/restaurant.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-detail-restaurent",
  templateUrl: "./detail-restaurent.component.html",
  styleUrls: [],
})
export class DetailRestaurentComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantsService
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
