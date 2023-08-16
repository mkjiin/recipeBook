import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './resipe.model';

export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe(
      'A test',
      'Teeeest',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80',
      [new Ingredient('Meat', 1), new Ingredient('Sossage', 1)]
    ),
    new Recipe(
      'A test2',
      'Teeees2t',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80',
      [new Ingredient('Sossage', 1)]
    ),
  ];
  singleRecipe: Recipe;

  get recipes() {
    return this._recipes.slice();
  }

  onSetRecipeForDetail(recipe: Recipe) {
    this.singleRecipe = recipe;
  }
}
