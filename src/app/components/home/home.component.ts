import { Component, OnInit } from '@angular/core';
import { DataService, Filter, SaleItem } from 'src/app/providers/data.service';
import { Subject, Observable } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsObservable: Observable<SaleItem[]>;

  filter$ = new Subject<Filter>();
  filter: Filter = {};

  constructor(private dataSvc: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.productsObservable = this.filter$.pipe(
      startWith({
        category: this.route.snapshot.queryParams.category
      }),
      map(res => {
        this.filter = res || {};
        return res;
      }),
      switchMap(res => {
        return this.dataSvc.getObservaleProducts(res);
      })
    );

    this.route.queryParams.subscribe(data => {
      console.log(data.category);

      if (data.category === 'sale') {
        this.filter.showOnlySale = true;
        this.filter$.next(this.filter);
        return;
      }

      this.filter.category = data.category;
      this.filter$.next(this.filter);
    });
  }

  ontoggled(showOnlySale: boolean) {
    this.filter.showOnlySale = showOnlySale;
    this.filter$.next(this.filter);
  }

  rangeChanged(range: number) {
    this.filter.highPrize = range;
    this.filter$.next(this.filter);
  }

  onaddtoCart(saleitem: SaleItem) {
    this.dataSvc.addToCart(saleitem);
  }
}
