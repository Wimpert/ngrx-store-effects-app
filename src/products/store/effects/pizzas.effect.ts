import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {LOAD_PIZZAS, LoadPizzasFail, LoadPizzasSuccess} from "../actions/pizzas.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {PizzasService} from "../../services";
import {of} from "rxjs/observable/of";

@Injectable()
export class PizzasEffects{

  constructor(private actions$ : Actions, private pizzaService: PizzasService ){}

  @Effect()
  loadPizzas$ = this.actions$.ofType(LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new LoadPizzasSuccess(pizzas)),
        catchError(err => of(new LoadPizzasFail(err)))
      )
    })
  );


}

