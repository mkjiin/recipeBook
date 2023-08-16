import { Component, DoCheck } from '@angular/core';
import { Recipe } from './resipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements DoCheck {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngDoCheck(): void {
    this.recipe = this.recipeService.singleRecipe;
  }
}
