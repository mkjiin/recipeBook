import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { UnselectedRecipe } from './components/recipe/recipe-detail/recipe-detail-select-a-recipe.compnent';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { ErrorComponent } from './components/error.component';
import { RecipeEditComponent } from './components/recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {
        path: '',
        component: UnselectedRecipe,
      },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
