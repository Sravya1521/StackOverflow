import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AllServicesService } from './all-services.service';

describe('AllServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllServicesService = TestBed.get(AllServicesService);
    expect(service).toBeTruthy();
  });


  fit('testing registration', inject([HttpTestingController,AllServicesService],(httpMock: HttpTestingController, service: AllServicesService)=>{
    const mockData =     {
      "email": "tom@gmail.com",
      "password": "Password@12",
      "displayName": "gameeee",
      "id":1
    };

    service.registerUserDetails('tom@gmail.com','Password@12','gameeee').subscribe(data => {
      expect(mockData[0].email).toBe("tom@gmail.com");
    });
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toEqual('POST');

    // Then we set the fake data to be returned by the mock
    req.flush(mockData);

  }));

});
