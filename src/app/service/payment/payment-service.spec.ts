import { TestBed } from '@angular/core/testing';
import { Payment, PaymentService } from './payment-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




describe('PaymentService', () => {
  let service: PaymentService;
  let httpMock:HttpTestingController;

  const dummyPayment:Payment={
    paymentId:1,
    amount:500,
    paymentDate:'21-09-2025',
    paymentMethod:'upi method',
    paymentStatus:'success'

  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PaymentService]
    });
    service = TestBed.inject(PaymentService);
    httpMock=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add d payment via POST',()=>{
    service.addPayment(dummyPayment).subscribe((res)=>{
      expect(res).toEqual(dummyPayment);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/payment/add`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPayment);
  });
  it('should view payment via GET',()=>{
    const paymentId=1;
    service.getPaymentById(paymentId).subscribe((res)=>{
      expect(res).toEqual(dummyPayment);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/payment/${paymentId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPayment);
  });
  it('should be get all payment via GET ',()=>{
    const paymnet:Payment[]=[dummyPayment];
    service.getAllPayments().subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(paymnet);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/payment/all`);
    expect(req.request.method).toBe('GET');
    req.flush(paymnet);
  });

});
