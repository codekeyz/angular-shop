import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SaleItem } from 'src/app/providers/data.service';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {
  @Input() item: SaleItem = {};

  @Output() cartAdd = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  addtoCart($event) {
    this.cartAdd.emit($event);
  }
}
