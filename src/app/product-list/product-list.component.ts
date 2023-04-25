import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() productList!: Product[];
  @Output() addProduct = new EventEmitter();
  @Output() editProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'price', 'delete'];

  constructor() { }

  updateProduct(product: Product) {
    this.editProduct.emit({...product});
  }
}