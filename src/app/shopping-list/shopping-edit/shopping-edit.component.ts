import { ShoppingListService } from './../../services/shoppingList.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onIngredientAdded(nameEl: HTMLInputElement, amountEl: HTMLInputElement) {
    // this.newIngredient.emit({ title: nameEl.value, amount: +amountEl.value });
    // console.log(this.newIngredient);
    this.slService.addIngredient(nameEl.value, +amountEl.value);
  }
}
