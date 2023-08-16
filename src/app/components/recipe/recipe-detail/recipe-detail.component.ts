import { Component, Input } from '@angular/core';
import { Recipe } from '../resipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.revice';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onPushIngredientsToShoppingList() {
    this.shoppingListService.onAcceptIngredientFromRecipeDetail(
      this.recipe.ingredients
    );
  }
}
