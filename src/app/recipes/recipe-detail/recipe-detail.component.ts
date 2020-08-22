import { RecipeService } from './../../services/recipe.service';
import { ShoppingListService } from './../../services/shoppingList.service';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeItemChosen: Recipe;
  dropdownOpened: boolean = false;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.dropdownOpened = false;
  }

  addIngrsToSL() {
    // this.recipeItemChosen.ingredients.forEach((ingredient) => {
    //   this.slService.addIngredient(ingredient.title, ingredient.amount);
    // });
    this.recipeService.addInredientsToShoppingList(
      this.recipeItemChosen.ingredients
    );
  }
}
