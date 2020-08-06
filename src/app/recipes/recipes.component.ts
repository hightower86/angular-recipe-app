import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  currRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  onRecipeEvent(recipe: Recipe) {
    this.currRecipe = recipe;
    console.log(this.currRecipe);
  }
}
