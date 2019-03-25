import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Filter {
  showOnlySale?: boolean;
  category?: string;
  highPrize?: number;
}

export class SaleItem {
  id?: number;
  name?: string;
  sale?: boolean;
  img?: string;
  price?: number;
  category?: string;
  article?: string;
}

export class CartItem extends SaleItem {
  count? = 0;
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

              const result_prize = sort.highPrize
                ? sort.highPrize <= item.price
                : true;

              const result_category = sort.category
                ? sort.category === item.category
                : true;

              return result_category && result_sort && result_prize;
            });
      })
    );
  }

  getObservableCart(): Observable<CartItem[]> {
    return of(this.getCart());
  }

  async addToCart(item: SaleItem) {
    const items: SaleItem[] = this.getCart();
    items.push(item);
    await localStorage.setItem('Cart', JSON.stringify(items));
  }

  async isinCart(id: number) {
    const items = this.getCart();
    const result = await items.map(item => {
      return item.id === id;
    });
    return result.includes(true);
  }

  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('Cart') || '[]');
  }

  getProducts(): SaleItem[] {
    return [
      {
        id: 1,
        name: 'Khaki Suede Polish Work Boots',
        price: 149.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'shoe1.png'
      },
      {
        id: 2,
        name: 'Camo Fang Backpack Jungle',
        price: 39.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket1.png'
      },
      {
        id: 3,
        name: 'Parka and Quilted Liner Jacket',
        price: 49.99,
        category: 'men',
        sale: true,
        article: 'jacket',
        img: 'jacket2.png'
      },
      {
        id: 4,
        name: 'Cotton Black Cap',
        price: 12.99,
        category: 'men',
        sale: true,
        article: 'hats',
        img: 'hat1.png'
      },
      {
        id: 5,
        name: 'Knit Sweater with Zips',
        price: 29.99,
        category: 'women',
        sale: false,
        article: 'sweater',
        img: 'sweater1.png'
      },
      {
        id: 6,
        name: 'Long Linen-blend Shirt',
        price: 18.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt1.png'
      },
      {
        id: 7,
        name: 'Knit Orange Sweater',
        price: 28.99,
        category: 'men',
        sale: false,
        article: 'sweater',
        img: 'sweater2.png'
      },
      {
        id: 8,
        name: 'Cotton Band-collar Blouse',
        price: 49.99,
        category: 'men',
        sale: false,
        article: 'shirt',
        img: 'shirt2.png'
      },
      {
        id: 9,
        name: 'Camo Fang Backpack Jungle',
        price: 59.99,
        category: 'women',
        sale: true,
        article: 'jacket',
        img: 'jacket3.png'
      },
      {
        id: 10,
        name: 'Golden Pilot Jacket',
        price: 129.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'jacket4.png'
      },
      {
        id: 11,
        name: 'Spotted Patterned Sweater',
        price: 80.99,
        category: 'women',
        sale: false,
        article: 'jacket',
        img: 'sweater4.png'
      },
      {
        id: 12,
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
