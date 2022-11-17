import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { IProduct } from '../ProductInterface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // wyrzucić do dataService
  products: IProduct[] = [];
  onDestory$ = new Subject<void>();

  constructor(
    private cartService: CartService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getProductList()
      .pipe(takeUntil(this.onDestory$))
      .subscribe((productList) => (this.products = productList));
  }

  ngOnDestroy() {
    this.onDestory$.next();
    this.onDestory$.complete();
  }

  handleAddToCart(item: IProduct) {
    this.cartService.handleAddToSelectedProducts(item);
    console.log(this.cartService.selectedProductsArray);
  }
}
