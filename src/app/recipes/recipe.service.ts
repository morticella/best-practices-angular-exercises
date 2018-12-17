import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import {Ingridient} from '../shared/ingridient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>() ;
  //recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
     new Recipe(
       'Name',
       'This is simply a test',
       'https://www.webmarketingfuture.com/wp-content/uploads/2017/03/mascotte.png',
       [
         new Ingridient ('ingredient 1',2),
         new Ingridient ('ingredient 2',1),
       ]),
     new Recipe(
       'A Test Recipe',
       'This is simply a test',
       'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
       new Ingridient ('Love 1',5),
       new Ingridient ('Hate 2',6),
     ])
   ];
   constructor(private slService:ShoppingListService){}

   setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
   }

   getRecipes() {
     return this.recipes.slice();
   }
   getRecipe(id:number) {
     return this.recipes[id];
   }
   addIngredientsToShoppingList(ingredients: Ingridient[]){
     this.slService.addIngredients(ingredients);
   }

   addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe (index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
   }

   deleteRecipe(index: number){
     this.recipes.splice(index,1);
     this.recipesChanged.next(this.recipes.slice());
   }
  // constructor() { }
}
