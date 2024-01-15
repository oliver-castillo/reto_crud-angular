import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../core/services/product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css',
})
export class ModalProductComponent {
  formProduct: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.formProduct = fb.group({
      id: new FormControl(''),
      name: new FormControl(''),
      unitPrice: new FormControl(''),
    });
  }

  saveProduct(): void {
    let product = new Product();
    product.name = this.formProduct.get('name')?.value;
    product.unitPrice = this.formProduct.get('unitPrice')?.value;
    this.productService.saveProduct(product).subscribe((res) => {
      this.formProduct.reset();
    });
  }
}
