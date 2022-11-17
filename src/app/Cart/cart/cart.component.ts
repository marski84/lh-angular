import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';
import { IProductInCart } from '../ProductInCartInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  productsInCart: IProductInCart[] = [];
  cartValue: any;
  onDestory$ = new Subject<void>();


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.selectedProductsArray;


    // price total
    // hot i cold
    this.cartValue = this.cartService.selectedProductsValue$.pipe(
      takeUntil(this.onDestory$),
    ).subscribe(
      result => this.cartValue = result
    );
  };

  ngOnDestroy() {
    this.onDestory$.next();
    this.onDestory$.complete();
  }

  removeProduct(product: IProductInCart) {
    this.cartService.removeProduct(product);
  };

  removeAllProducts() {
    this.cartService.removeAllProducts();
  };

  addAnotherProduct(product: IProductInCart) {
    this.cartService.handleAddAnotherProduct(product);
  };

};
