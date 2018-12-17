import { Ingridient} from '../shared/ingridient.model';
import { Subject} from 'rxjs/Subject';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number){
    return this.ingredients[index];

  }
  addIngredient(ingredient: Ingridient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingridient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingridient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  constructor() { }
}
