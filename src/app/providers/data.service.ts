import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class Filter {
  showOnlySale?: boolean;
  category?: string;
  highPrize?: number;
}

export class SaleItem {
  name?: string;
  sale?: boolean;
  img?: string;
  price?: number;
  category?: string;
  article?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getObservaleProducts(sort: Filter) {
    return of(this.getProducts()).pipe(
      map(products => {
        return !sort
          ? products
          : products.filter(item => {
              const result_sort = sort.showOnlySale
                ? sort.showOnlySale === item.sale
                : true;
              console.log(result_sort);

              const result_prize = sort.highPrize
                ? sort.highPrize <= item.price
                : true;

              return result_prize && result_sort;
            });
      })
    );
  }

  async addToCart(item: SaleItem) {
    const items: SaleItem[] = this.getCart();
    items.push(item);
    await localStorage.setItem('Cart', JSON.stringify(items));
  }

  getCart(): SaleItem[] {
    return JSON.parse(localStorage.getItem('Cart') || '[]');
  }

  getProducts(): SaleItem[] {
    return [
      {
        name: 'Khaki Suede Polish Work Boots',
        price: 149.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'shoe1.png'
      },
      {
        name: 'Camo Fang Backpack Jungle',
        price: 39.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket1.png'
      },
      {
        name: 'Parka and Quilted Liner Jacket',
        price: 49.99,
        category: 'men',
        sale: true,
        article: 'jacket',
        img: 'jacket2.png'
      },
      {
        name: 'Cotton Black Cap',
        price: 12.99,
        category: 'men',
        sale: true,
        article: 'hats',
        img: 'hat1.png'
      },
      {
        name: 'Knit Sweater with Zips',
        price: 29.99,
        category: 'women',
        sale: false,
        article: 'sweater',
        img: 'sweater1.png'
      },
      {
        name: 'Long Linen-blend Shirt',
        price: 18.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt1.png'
      },
      {
        name: 'Knit Orange Sweater',
        price: 28.99,
        category: 'men',
        sale: false,
        article: 'sweater',
        img: 'sweater2.png'
      },
      {
        name: 'Cotton Band-collar Blouse',
        price: 49.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt2.png'
      },
      {
        name: 'Camo Fang Backpack Jungle',
        price: 59.99,
        category: 'women',
        sale: true,
        article: 'jacket',
        img: 'jacket3.png'
      },
      {
        name: 'Golden Pilot Jacket',
        price: 129.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket4.png'
      },
      {
        name: 'Spotted Patterned Sweater',
        price: 80.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'sweater4.png'
      },
      {
        name: 'Double Knit Sweater',
        price: 59.99,
        category: 'men',
        sale: true,
        article: 'jacket',
        img: 'sweater5.png'
      }
    ];
  }
}
