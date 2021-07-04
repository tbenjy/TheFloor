import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from '../api.service';

import { Customer } from '../customer';
import { CustomerAddingComponent } from "../customer-adding/customer-adding.component"

@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'fullName'];
  dataSource!: Customer[];

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiService.ReadCustomers().subscribe((result)=>{
      this.dataSource = result;
    })
  }

  CreateCustomer(): void {
    const dialogRef = this.dialog.open(CustomerAddingComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
}
