import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../core/services/product.service';
import { ModalProductComponent } from '../modal-product/modal-product.component';

@Component({
  selector: 'app-add-edit-order',
  standalone: true,
  imports: [
    ModalProductComponent
  ],
  templateUrl: './add-edit-order.component.html',
  styleUrl: './add-edit-order.component.css',
})
export class AddEditOrderComponent implements OnInit {
  public products: Array<Product>;

  constructor(private service: ProductService) {
    this.products = new Array<Product>();
  }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
