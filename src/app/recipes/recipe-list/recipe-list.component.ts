import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'desription of recipe',
      'https://fb.ru/misc/i/thumb/a/2/7/7/9/1/2/2/2779122.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This Bukharian Jewish Meaty Rice Dish',
      'https://i.pinimg.com/236x/48/e4/97/48e4974196835f107952866fd0180618.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
