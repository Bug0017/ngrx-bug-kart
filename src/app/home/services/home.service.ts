import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/api/v1/products';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllNormalProducts() {
    return this.http.get(`${baseUrl}/normal`);
  }

  getAllDOTDProducts() {
    return this.http.get(`${baseUrl}/deal-of-the-day`);
  }
}
