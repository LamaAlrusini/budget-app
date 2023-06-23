import { Component } from '@angular/core';
import { BudgetService } from 'services/budget.service';
import { ItemListSharedService } from 'services/item-list-shared.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  data: any;
  constructor(private budgetService: BudgetService,
    private itemList: ItemListSharedService) {

  }
  ngOnInit() {
    if (this.itemList.subsVar==undefined) {    
      this.itemList.subsVar = this.itemList.    
      invokeGetBudgetItems.subscribe((name:string) => {    
        this.getAllBudgetItems();    
      });    
    }    
    this.getAllBudgetItems();
  }


  getAllBudgetItems() {
    this.budgetService.getAllBudgetItems().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
