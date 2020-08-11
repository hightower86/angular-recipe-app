import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Grapes', 2),
    new Ingredient('Orange', 1),
  ];
  constructor() {}

  ngOnInit() {}

  onNewIngredientAdded(ing) {
    this.ingredients = [ing, ...this.ingredients];
  }
}
