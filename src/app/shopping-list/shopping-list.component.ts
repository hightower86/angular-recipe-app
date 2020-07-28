import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit() {}
}
