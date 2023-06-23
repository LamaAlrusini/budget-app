import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListSharedService {

  constructor() { }

  invokeGetBudgetItems = new EventEmitter();
  invokeGetTotalBudget = new EventEmitter();
  subsVar : Subscription | undefined;
  subsVar2 : Subscription | undefined;

  getBudgetItems(){
    this.invokeGetBudgetItems.emit();
  }

  getTotalBudget(){
    this.invokeGetTotalBudget.emit();
  }
}
