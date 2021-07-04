import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddingComponent } from './customer-adding.component';

describe('CustomerAddingComponent', () => {
  let component: CustomerAddingComponent;
  let fixture: ComponentFixture<CustomerAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
