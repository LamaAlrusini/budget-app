import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from '../shared/models/budget-item';

@Component({
  selector: 'app-edit-budget-item',
  templateUrl: './edit-budget-item.component.html',
  styleUrls: ['./edit-budget-item.component.css']
})
export class EditBudgetItemComponent {

  updatedBudgetItem: any;
  constructor(public dialogRef: MatDialogRef<EditBudgetItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem,) {
    this.updatedBudgetItem = item;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
