import { TestBed } from '@angular/core/testing';
import { Customer, CustomerService } from './customer-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock:HttpTestingController;

  const dummyCustomer:Customer={
    customerId:1,
    firstName:'virat',
    lastName:'kohli',
    email:'virat@gmail.com',
    phone:'475870',
    dateOfBirth :'12-09-1976',
    loyaltyPoints :'15'
    
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CustomerService]
    });
    service = TestBed.inject(CustomerService);
    httpMock=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be add customer via POST',()=>{
    service.addCustomer(dummyCustomer).subscribe((res)=>{
      expect(res).toEqual(dummyCustomer);
    });
    const req=httpMock.expectOne(`http://localhost:5004/customer/add`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyCustomer);
  });
  it('should view customer via GET',()=>{
    const customerId=1;
    service.getCustomerById(customerId).subscribe((res)=>{
      expect(res).toEqual(dummyCustomer);
      
    });
    const req=httpMock.expectOne(`http://localhost:5004/customer/${customerId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCustomer);
  });

  it('should get all customers via GET',()=>{
    const customers:Customer[]=[dummyCustomer];
    service.getAllCustomers().subscribe((res)=>{
    expect(res.length).toBe(1);
    expect(res).toEqual(customers);
    });
    const req=httpMock.expectOne(`http://localhost:5004/customer/all`);
    expect(req.request.method).toBe('GET');
    req.flush(customers);
  });
});
