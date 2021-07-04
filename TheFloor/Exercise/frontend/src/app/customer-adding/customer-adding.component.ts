import {Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ApiService } from "../api.service";

import { CustomerDetails } from "../customer-details";

@Component({
  selector: 'app-customer-adding',
  templateUrl: './customer-adding.component.html',
  styleUrls: ['./customer-adding.component.css']
})
export class CustomerAddingComponent {
  @ViewChild('phoneIpt') public phoneIpt!: ElementRef;
  details!: CustomerDetails;
  title!: string;
  toUpdate!: boolean;

  constructor(private apiService: ApiService,
              private dialogRef: MatDialogRef<CustomerAddingComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CustomerDetails) {

    this.details = new CustomerDetails();
    if (data) {
      this.details._id = data._id;
      this.details.firstName = data.firstName;
      this.details.lastName = data.lastName;
      this.details.city = data.city;
      this.details.address = data.address;
      this.details.phone = data.phone;

      this.title = "עדכון לקוח";
      this.toUpdate = true;
    }
    else {
      this.title = "הוספת לקוח";
      this.toUpdate = false;
    }
  }

  ngOnInit(): void {
  }

  PhoneKeyPress(event: any) {
    // If the key isn't a digit or there are maximum digits already
    if ((event.keyCode < 48) || (event.keyCode > 58) || (this.phoneIpt.nativeElement.value.length == this.phoneIpt.nativeElement.getAttribute("maxlength")))
      // Cancels the pressing
      event.preventDefault();
  }

  CreateCustomer() {
    this.apiService.CreateCustomer(this.details).subscribe((result)=>{
      console.log(result);
    });
  }

  UpdateCustomer(){
    this.apiService.UpdateCustomer(this.details).subscribe((result)=>{
      console.log(result);
    });
  }

  OKClick(): void {
    try {
      if (this.toUpdate)
        this.UpdateCustomer();
      else
        this.CreateCustomer();
      this.dialogRef.close();
    }
    catch(e) {
      alert("אופס, נראה שיש בעיה עם השרת.")
    }
  }

  CancelClick(): void {
    this.dialogRef.close();
  }
}
