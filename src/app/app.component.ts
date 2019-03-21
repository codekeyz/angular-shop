import { Component, OnInit } from '@angular/core';
import { DataService } from './providers/data.service';
import { interval, of } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import { SaleItem } from './providers/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartCount$;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.cartCount$ = interval(1000).pipe(
      startWith(0),
      switchMap(() => of(this.dataSvc.getCart())),
      map(res => res.length)
    );
  }
}
