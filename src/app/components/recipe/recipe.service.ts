import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './resipe.model';
import { Subject, combineLatest } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  activeRecipe: Recipe;

  private _recipes: Recipe[] = [
    new Recipe(
      1,
      'A test',
      'Teeeest',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80',
      [new Ingredient('Meat', 1), new Ingredient('Sossage', 1)]
    ),
    new Recipe(
      2,
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

  getSingleRecipe(id: number) {
    return this._recipes.find((el) => el.id === id);
  }

  onSetRecipeForDetail(recipe: Recipe) {
    this.singleRecipe = recipe;
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this._recipes[index - 1] = newRecipe;
    this.recipesChanged.next(this._recipes.slice());
  }

  deleteRecipe(id: number) {
    this._recipes = this._recipes.filter((el) => el.id !== id);
    this.recipesChanged.next(this._recipes.slice());
  }
}
