import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onIngridientAdded(nameEl: HTMLInputElement, amountEl: HTMLInputElement) {
    this.newIngredient.emit({ title: nameEl.value, amount: +amountEl.value });
    console.log(this.newIngredient);
  }
}
