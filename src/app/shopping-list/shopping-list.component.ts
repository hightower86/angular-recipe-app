import { ShoppingListService } from './../services/shoppingList.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  providers: [ShoppingListService],
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppinglistService: ShoppingListService) {
    this.shoppinglistService.inredientsChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
  }
}
