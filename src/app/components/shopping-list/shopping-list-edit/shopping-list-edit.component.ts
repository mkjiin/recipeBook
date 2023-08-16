import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.revice';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit() {
    const inpName = this.nameInput.nativeElement.value;
    const inpAmoint = this.amountInput.nativeElement.value;
    this.shoppingListService.onAddIngredient(
      new Ingredient(inpName, inpAmoint)
    );
  }
}
