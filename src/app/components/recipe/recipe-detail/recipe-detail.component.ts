import { Component, OnInit } from '@angular/core';
import { Recipe } from '../resipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.revice';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  paramsSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onPushIngredientsToShoppingList() {
    this.shoppingListService.onAcceptIngredientFromRecipeDetail(
      this.recipe.ingredients
    );
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../']);
  }

  ngOnInit(): void {
    // this.recipe = this.recipeService.recipes[+this.route.snapshot.params['id']];
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.recipes.find(
        (el) => el.id === +params['id']
      );
      this.id = +params['id'];
      console.log(this.recipe.ingredients);
    });
  }
}
