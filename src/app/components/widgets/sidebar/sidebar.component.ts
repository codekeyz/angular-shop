import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() inputmin = 0;

  @Input() inputmax = 400;

  @Input() priceRange = 300;

  @Output() rangeChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onchange($event) {
    this.rangeChange.emit($event.srcElement.value);
  }
}
