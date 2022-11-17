import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../ProductInterface';


// description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris nisi, egestas a diam vel, tempus mollis turpis. Vestibulum vitae est quis lectus tristique posuere. Nulla facilisi. Integer semper facilisis turpis nec semper. Curabitur et pretium arcu. Etiam sodales placerat ipsum, in ornare dolor convallis at. Nulla vitae dui leo. Donec accumsan augue odio, sed pharetra ligula vulputate et. Suspendisse molestie tortor ut leo rutrum, sed egestas sapien suscipit.
//         Nulla nec rutrum velit. Donec luctus sem neque.`,
//   price: 699.99,

// interface wydzielić


// produkty pokazują cene, tytuł oraz opis ograniczony do 20 znaków.
// TODO pipe

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productData!: IProduct;


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  addProduct() {
    console.log(this.productData);
    this.cartService.handleAddToSelectedProducts(this.productData);
  };



}
