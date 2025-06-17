import { TestBed } from '@angular/core/testing';
import { Booking, BookingService } from './booking-service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('BookingService', () => {
  let service: BookingService;
  let httpMock: HttpTestingController;

  const dummyBooking: Booking = {
    bookingId: 1,
    customerId: 101,
    flightId: 202,
    bookingDate: '21-09-2025',
    bookingTime: '9.00',
    seatNumber: 'A12',
    status: 'confirmed',
    payment: {
      paymentId: 1, amount: 1500, paymentDate: '23-09-2015',
      paymentMethod: 'CreditCard',
      paymentStatus: 'Success',
    }
 
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingService]
    });
    service = TestBed.inject(BookingService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a booking via POST', () => {
    service.addBooking(dummyBooking).subscribe((res) => {
      expect(res).toEqual(dummyBooking);
    });
  const req = httpMock.expectOne('http://localhost:5008/bookings/add');
  expect(req.request.method).toBe('POST');
  req.flush(dummyBooking);
  });
  
  it('should view a booking via GET', () => {
    const bookingId = 1;
  
    service.getBookingById(bookingId).subscribe((res) => {
      expect(res).toEqual(dummyBooking);
    });
    const req = httpMock.expectOne(`http://localhost:5008/bookings/${bookingId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooking);
  });

  it('should get all bookings via GET', () => {
    const bookings: Booking[] = [dummyBooking];
  
    service.loadAllBookings().subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(bookings);
    });
  
    const req = httpMock.expectOne('http://localhost:5008/bookings/all');
    expect(req.request.method).toBe('GET');
    req.flush(bookings);
  });
  it('should get full booking details via GET', () => {
    const fullDetails = { booking: dummyBooking, payment: dummyBooking.payment.paymentId };
    const bookingId = 1;

    service.getFullBooking(bookingId).subscribe((res) => {
      expect(res).toEqual(fullDetails);
    });

    const req = httpMock.expectOne(`http://localhost:5008/bookings/details/${bookingId}`);
    expect(req.request.method).toBe('GET');
    req.flush(fullDetails);
  });
});
