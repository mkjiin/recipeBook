import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  currentIngredientChanged = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];
  get ingredients() {
    return this._ingredients.slice();
  }

  getIngredient(index) {
    return this._ingredients[index];
  }

  onChangeInredient(index: number, newAmount: number) {
    this._ingredients[index].amount = newAmount;
  }

  onAddIngredient(ingredient: Ingredient) {
    if (this._ingredients.some((el) => el.name === ingredient.name)) {
      const tempIngredientArray: Ingredient[] = this._ingredients.map((el) => {
        if (el.name === ingredient.name) {
          // console.log(ingredient.amount);
          return new Ingredient(el.name, el.amount + ingredient.amount);
        } else {
          return el;
        }
      });
      // console.log(tempIngredientArray);
      return this.ingredientsChanged.next(tempIngredientArray);
    } else {
      this._ingredients.push(ingredient);
      this.ingredientsChanged.next(this._ingredients.slice());
    }
  }

  onAcceptIngredientFromRecipeDetail(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  onDeleteIngredient(index: number) {
    this._ingredients = this._ingredients.filter(
      (el) => el !== this._ingredients[index]
    );
    // this._ingredients.splice(index, 1);
    console.log(this._ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
  }
  // onClickOnIngredient(ingredient: Ingredient) {
  //   // this.currentIngredient = ingredient;
  //   this.currentIngredientChanged.next(ingredient);
  // }
}
