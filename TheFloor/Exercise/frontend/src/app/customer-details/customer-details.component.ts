import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ApiService } from '../api.service';
import { Subscription } from "rxjs";

import { CustomerDetails } from '../customer-details';
import {CustomerAddingComponent} from "../customer-adding/customer-adding.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})

export class CustomerDetailsComponent implements OnInit {
  initColumns: any[] = [
    { name: '_id',  display: 'מס"ד'},
    { name: 'firstName', display: 'שם פרטי'},
    { name: 'lastName', display: 'שם משפחה'},
    { name: 'city', display: 'עיר'},
    { name: 'address', display: 'כתובת'},
    { name: 'phone', display: 'טלפון / נייד'}
  ];
  displayedColumns: any[] = this.initColumns.map(col => col.name);
  dataSource!: CustomerDetails[];

  private routeSub!: Subscription;
  private id: any;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.apiService.ReadCustomerDetails(this.id).subscribe((result)=>{
      this.dataSource = [result];
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  UpdateCustomer(): void {
    const dialogRef = this.dialog.open(CustomerAddingComponent, {
      data: this.dataSource[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }
}
