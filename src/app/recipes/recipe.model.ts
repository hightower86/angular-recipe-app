import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    descr: string,
    imgPath: string,
    ings: Ingredient[]
  ) {
    (this.name = name),
      (this.description = descr),
      (this.imagePath = imgPath),
      (this.ingredients = ings);
  }
}
