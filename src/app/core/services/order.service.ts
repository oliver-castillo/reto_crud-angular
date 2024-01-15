import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  //baseUrl = 'http://localhost:8080/orders';
  baseUrl = 'https://retocrud-java-spring-production.up.railway.app/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getOrderById(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  saveOrder(order: Order) {
    return this.http.post(this.baseUrl, order);
  }

  updateOrder(id: string, order: Order) {
    return this.http.put(this.baseUrl + '/' + id, order);
  }

  deleteOrder(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
