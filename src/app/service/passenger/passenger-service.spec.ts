import { TestBed } from '@angular/core/testing';
import { Passenger, PassengerService } from './passenger-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Booking } from '../booking/booking-service';


describe('PassengerService', () => {
  let service: PassengerService;
  let httpMock:HttpTestingController;

  const dummyPassenger:Passenger={
    passengerId:1,
    name:'dv',
      gender:'female',
      age:65,
      passportNumber:'A1234567',
      nationality:'australian',
      booking:{
        bookingId:1
      }

  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PassengerService]
    });
    service = TestBed.inject(PassengerService);
    httpMock=TestBed.inject(HttpTestingController);
  });
 
  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add passenger via POST',()=>{
    service.addPassenger(dummyPassenger).subscribe((res)=>{
      expect(res).toEqual(dummyPassenger);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/passenger/add`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPassenger);
  });

  it('should get passenger via GET',()=>{
    const passengerId=1;

    service.getPassengerById(passengerId).subscribe((res)=>{
    expect(res).toEqual(dummyPassenger);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/passenger/${passengerId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPassenger);
  });

  it('should get all bookings via GET',()=>{
    const passenger:Passenger[]=[dummyPassenger];

    service.loadAllPassengers().subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(passenger);
    });
    const req=httpMock.expectOne(`http://localhost:5008/bookings/passenger/all`);
    expect(req.request.method).toBe('GET');
     req.flush(passenger);
  });

});

