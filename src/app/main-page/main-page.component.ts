import { Component } from '@angular/core';
import { BudgetService } from 'services/budget.service';
import { ItemListSharedService } from 'services/item-list-shared.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  totalBudget:number = 0;
  constructor(private budgetService: BudgetService,
    private itemList: ItemListSharedService) {
      
  }
  ngOnInit() {
    if (this.itemList.subsVar2==undefined) {    
      this.itemList.subsVar2 = this.itemList.    
      invokeGetBudgetItems.subscribe((name:string) => {    
        this.getTotalBudget();    
      });    
    }  
    this.getTotalBudget();
  }

  getTotalBudget() {
    this.budgetService.getTotalBudget().subscribe(
      (response: any) => {
        this.totalBudget = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
