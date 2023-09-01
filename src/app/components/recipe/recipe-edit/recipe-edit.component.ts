import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../resipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipeImagePath: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params.hasOwnProperty('id');
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getSingleRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      this.recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingredientName: new FormControl(
                ingredient.name,
                Validators.required
              ),
              ingredientAmount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).controls.push(
      new FormGroup({
        ingredientName: new FormControl('', Validators.required),
        ingredientAmount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onSubmit() {
    // if (this.editMode) {
    //   this.recipeService.updateRecipe(this.id, {
    //     id: this.id,
    //     ...this.recipeForm.value,
    //   });
    //   console.log({ id: this.id, ...this.recipeForm.value });
    //   return;
    // }
    // this.recipeService.addRecipes(this.recipeForm.value);
    // console.log({ id: 3, ...this.recipeForm.value });
    const newRecipe = new Recipe(
      this.id,
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      // console.log(this.id);
      // console.log(this.recipeService.recipes);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
