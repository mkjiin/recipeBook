import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { Dropdown } from './shared/dropdown.directive';
import { RecipeService } from './components/recipe/recipe.service';
import { ShoppingListService } from './components/shopping-list/shopping-list.revice';
import { AppRoutingModule } from './app-routing.module';
import { UnselectedRecipe } from './components/recipe/recipe-detail/recipe-detail-select-a-recipe.compnent';
import { ErrorComponent } from './components/error.component';
import { RecipeEditComponent } from './components/recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    Dropdown,
    UnselectedRecipe,
    ErrorComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
