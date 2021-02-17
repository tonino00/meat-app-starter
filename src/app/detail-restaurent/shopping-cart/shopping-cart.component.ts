import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartServie: ShoppingCartService) {}

  ngOnInit() {}

  items(): any[] {
    return this.shoppingCartServie.items;
  }

  clear() {
    return this.shoppingCartServie.clear();
  }

  removeItem(item: any) {
    this.shoppingCartServie.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartServie.addItem(item);
  }

  total(): number {
    return this.shoppingCartServie.total();
  }
}
