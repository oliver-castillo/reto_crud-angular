import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //baseUrl = 'http://localhost:8080/products';
  baseUrl = 'https://retocrud-java-spring-production.up.railway.app/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  saveProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  getProductById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put(this.baseUrl + '/' + id, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
