import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductInCart } from './ProductInCartInterface';
import { IProduct } from './ProductInterface';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  selectedProductsArray: IProductInCart[] = [];
  selectedProductsValue$ = new BehaviorSubject<number>(0);

  constructor() {
    this.selectedProductsValue$.next(0)
  }

  // type guard?
  public isProductInCart(product: IProductInCart): product is IProductInCart {
    const isInCart = this.selectedProductsArray.some(
      (selectedProduct: any) => {
        return selectedProduct.title === product.title
      })
    return isInCart;
  };

  public handleAddToSelectedProducts(product: IProduct | IProductInCart) {
    const productAmount = this.selectedProductsArray.length;

    if (productAmount === 3) {
      return;
    };

    // usage of type guard
    // if (this.isProductInCart(product)) {
    //   product.quantity;
    // }

    // nie zagnieżdżamy jak nie potrzeba
    // if(this.isProductInCart(product)) {
    //   alert('juz jest');
    //   return;
    // }
    // Object.defineProperty(product, 'quantity', {
    //   value: 1,
    //   writable: true
    // });

    // this.selectedProductsArray.push(product);
    // this.calculateCartValue();



    if (this.isProductInCart(product)) {
      alert('juz jest');
      return;
    }

    Object.defineProperty(product, 'quantity', {
      value: 1,
      writable: true
    });

    this.selectedProductsArray.push(product);
    this.calculateCartValue();
  };


  public calculateCartValue() {
    const price = this.selectedProductsArray
      .reduce(
        (prevAccSum: number, currProductInCart: IProductInCart) => {

          if (prevAccSum === 0) {
            const sum = prevAccSum + (currProductInCart.price * currProductInCart.quantity!);
            return sum;
          }
          else {
            const sum = prevAccSum + (currProductInCart.price * currProductInCart.quantity!);
            return sum;
          };
        }, 0
      );

    const totalPrice = Number(price.toFixed(2));

    this.emitValue(totalPrice);
  };

  private emitValue(value: number) {
    this.selectedProductsValue$.next(value);
  };

  public removeAllProducts() {
    this.selectedProductsArray.length = 0;
    this.calculateCartValue();
  };

  public removeProduct(product: IProductInCart) {
    const indexInArray = this.selectedProductsArray.findIndex((productInArray) => productInArray.title === product.title);
    this.selectedProductsArray.splice(indexInArray, 1);
    this.calculateCartValue();
  };

  // TODO refactor nazwy
  public handleAddAnotherProduct(product: IProductInCart) {
    this.selectedProductsArray.find((productInCart) => {
      if (productInCart.title === product.title) {
        productInCart.quantity! += 1;
      };
    }
    );
    this.calculateCartValue();
  };
};
