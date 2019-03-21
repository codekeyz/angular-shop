import { Component, OnInit } from '@angular/core';
import { DataService, Filter, SaleItem } from 'src/app/providers/data.service';
import { Subject, Observable } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsObservable: Observable<SaleItem[]>;

  filter$ = new Subject<Filter>();
  filter: Filter = {};

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.productsObservable = this.filter$.pipe(
      startWith(null),
      map(res => {
        this.filter = res || {};
        return res;
      }),
      switchMap(res => {
        return this.dataSvc.getObservaleProducts(res);
      })
    );
  }

  ontoggled(showOnlySale: boolean) {
    this.filter.showOnlySale = showOnlySale;
    this.filter$.next(this.filter);
  }

  rangeChanged(range: number) {
    this.filter.highPrize = range;
    this.filter$.next(this.filter);
  }
}
