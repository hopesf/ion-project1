import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  public baseUrl = 'http://localhost:2000';

  constructor(private httpClient: HttpClient) {}

  public getDevices(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/device/all');
  }
}
