import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem } from '../shared/models/budget-item';
import { BudgetService } from 'services/budget.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemListSharedService } from 'services/item-list-shared.service';
import { BudgetItemBrief } from '../shared/models/budget-item-brief';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {
  @Output("closeDialog") closeDialog: EventEmitter<any> = new EventEmitter();
  @Input() budgetItem: BudgetItem = new BudgetItem();
  @Input() isUpdate: boolean = false;
  @Input() budgetItemId: number = 0;

  constructor(private budgetService: BudgetService,
    private itemList: ItemListSharedService) { }



  onSubmit() {
    if (this.isUpdate) {
      var updatedBudgetItem = {
        id: this.budgetItemId,
        amount: this.budgetItem.amount,
        description:this.budgetItem.description
      }
      this.budgetService.updateBudgetItem(updatedBudgetItem).subscribe(
        (response: any) => {
          console.log(response);
          this.budgetItem = new BudgetItem();
          this.itemList.getBudgetItems();
          this.itemList.getTotalBudget();
        },
        (error: any) => {
          console.log(error);
        }
      );
      this.closeDialog.emit();
      return;
    }
    this.budgetService.addBudgetItem(this.budgetItem).subscribe(
      (response: any) => {
        console.log(response);
        this.budgetItem = new BudgetItem();
        this.itemList.getBudgetItems();
        this.itemList.getTotalBudget();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
