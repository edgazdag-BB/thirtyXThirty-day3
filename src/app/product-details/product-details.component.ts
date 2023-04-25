import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() productUpdated: EventEmitter<Product> = new EventEmitter<Product>();

  productCategories: string[] = ['Personal Care', 'Food/Drink', 'Lawn & Garden'];

  constructor() { }
}
