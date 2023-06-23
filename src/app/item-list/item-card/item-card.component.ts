import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetService } from 'services/budget.service';
import { ItemListSharedService } from 'services/item-list-shared.service';
import { EditBudgetItemComponent } from 'src/app/edit-budget-item/edit-budget-item.component';
import { BudgetItem } from 'src/app/shared/models/budget-item';
import { BudgetItemBrief } from 'src/app/shared/models/budget-item-brief';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() isIncome: boolean = false;
  @Input() budgetItem: BudgetItemBrief = new BudgetItemBrief();
  cardBodyClass = 'card-body text-danger';
  cardBadgeClass = 'badge bg-danger';
  cardRowClass = 'card border-danger mb-3';

  constructor(private budgetService: BudgetService,
    private itemList: ItemListSharedService,
    private dialog: MatDialog) {

  }
  ngOnInit() {
    this.itemClasses();
  }

  itemClasses() {
    if (this.isIncome) {
      this.cardBodyClass = 'card-body text-success';
      this.cardBadgeClass = 'badge bg-success';
      this.cardRowClass = 'card border-success mb-3';
    }
  }

  handleDeleteItem(id: number) {
    this.budgetService.deleteBudgetItem(id).subscribe(
      (response: any) => {
        console.log(response);
        this.itemList.getBudgetItems();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleClickedItemButton(item: BudgetItemBrief) {
    const dialogRef = this.dialog.open(EditBudgetItemComponent, {
      width: '580px',
      data: {...item},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
}

