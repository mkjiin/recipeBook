import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../resipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
}
