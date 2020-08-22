import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Grapes', 2),
    new Ingredient('Orange', 1),
  ];

  inredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(title: string, amount: number) {
    console.log('title', title, 'amount', amount);
    this.ingredients.push(new Ingredient(title, amount));
    this.inredientsChanged.emit(this.ingredients.slice());
  }
  deleteIngredient(ingredient: Ingredient) {
    const idx = this.ingredients.indexOf(ingredient);
    const ingsBeforeIdx = this.ingredients.slice(0, idx);
    const ingsAfterIdx = this.ingredients.slice(idx);
    this.ingredients = [...ingsAfterIdx, ...ingsAfterIdx];
  }
  clearIngredients() {
    this.ingredients = [];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.inredientsChanged.emit(this.ingredients.slice());
  }
}
