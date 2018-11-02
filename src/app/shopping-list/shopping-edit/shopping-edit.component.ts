import { Component, OnInit, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() IngredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.nameRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.IngredientAdded.emit(newIngredient);
  }

}
