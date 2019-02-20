import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServicesService {

  constructor(private http: HttpClient) { }

  /**
 * Fetch data with HTTP.
 * @function
 */
  getModel() {
    let model = this.http.get('assets/model.json')
    return model;
  }
}
