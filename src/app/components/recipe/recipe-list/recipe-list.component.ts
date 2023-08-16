import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../resipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  onSetSingleRecipeForDetial(recipe) {
    this.recipeService.onSetRecipeForDetail(recipe);
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }
}
