import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://localhost:7244/api/Budgets';

  getAllBudgetItems() {
    return this.http.get(this.rootURL );
  }

  getTotalBudget() {
    return this.http.get(this.rootURL + '/TotalBudget' );
  }

  addBudgetItem(budgetItem: any) {
    return this.http.post(this.rootURL, budgetItem);
  }

  updateBudgetItem(budgetItem: any) {
    return this.http.post(this.rootURL+'/UpdateBudgetItem', budgetItem);
  }

  deleteBudgetItem(id: number) {
    return this.http.delete(this.rootURL+`/${id}`);
  }
}
