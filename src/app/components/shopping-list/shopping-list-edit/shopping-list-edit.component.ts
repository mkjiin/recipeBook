import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.revice';
import { NgForm } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListForm', { static: false }) shoppingListForm: NgForm;
  sub: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit(shoppingListForm: NgForm) {
    if (this.editMode === true) {
      this.shoppingListService.onChangeInredient(
        this.editItemIndex,
        this.shoppingListForm.value['amountInput']
      );
      this.editMode = false;
      shoppingListForm.reset();
    } else {
      this.shoppingListService.onAddIngredient(
        new Ingredient(
          shoppingListForm.value['nameInput'],
          shoppingListForm.value['amountInput']
        )
      );
      this.shoppingListForm.reset();
    }
  }

  onClear() {
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.onDeleteIngredient(this.editItemIndex);
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnInit(): void {
    this.sub = this.shoppingListService.currentIngredientChanged.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          nameInput: this.editedItem.name,
          amountInput: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
