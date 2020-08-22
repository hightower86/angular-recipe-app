import { ShoppingListService } from './shoppingList.service';
import { Recipe } from './../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'desription of recipe',
      'https://fb.ru/misc/i/thumb/a/2/7/7/9/1/2/2/2779122.jpg',
      [
        new Ingredient('water', 78),
        new Ingredient('onion', 8),
        new Ingredient('carrot', 85),
      ]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This Bukharian Jewish Meaty Rice Dish',
      'https://i.pinimg.com/236x/48/e4/97/48e4974196835f107952866fd0180618.jpg',
      [
        new Ingredient('rice', 12),
        new Ingredient('meat', 8),
        new Ingredient('cheese', 32),
      ]
    ),
    new Recipe(
      'A Test Recipe 3',
      'Skillet Chicken and Asparagus Cooked In Garlic Infused Olive',
      'https://avatars.mds.yandex.net/get-zen-logos/200214/pub_5cf4fa9192695500af757f14_5cf4fbff6d847900afdd51d5/xxh',
      [
        new Ingredient('chicken', 1),
        new Ingredient('asparagus', 7),
        new Ingredient('garlic', 10),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  selectedItem = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addInredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsToShoppingList(ingredients);
  }
}
