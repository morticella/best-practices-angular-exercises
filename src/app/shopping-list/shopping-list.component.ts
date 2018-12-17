import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingridient[];
  private subscription:Subscription;
  // = [
  //   new Ingridient('Apples', 5),
  //   new Ingridient('Tomatoes', 10),
  // ];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingridient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditIem(index: number){
    this.slService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient:Ingridient){
  //   this.ingredients.push(ingredient);
  // }
}
