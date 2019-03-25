import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, DataService } from 'src/app/providers/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  cartTotal = 0;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.cartItems$ = this.dataSvc.getObservableCart().pipe(
      map(res => {
        res.map(res => {
          this.cartTotal += res.price * (res.count || 1);
        });
        return res;
      })
    );
  }
}
