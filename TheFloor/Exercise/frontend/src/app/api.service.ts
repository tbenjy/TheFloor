import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from  './customer';
import { CustomerDetails } from  './customer-details';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_SERVER = "http://localhost:3000/customers";

  constructor(private httpClient: HttpClient) { }

  public ReadCustomers() {
    return this.httpClient.get<Customer[]>(`${this.API_SERVER}`);
  }

  public ReadCustomerDetails(id: number) {
    return this.httpClient.get<CustomerDetails>(`${this.API_SERVER}/${id}`);
  }

  public CreateCustomer(details: CustomerDetails) {
    return this.httpClient.post<CustomerDetails>(`${this.API_SERVER}/create`, details);
  }

  public UpdateCustomer(details: CustomerDetails) {
    return this.httpClient.put<CustomerDetails>(`${this.API_SERVER}/${details._id}/update`, details);
  }
}
