import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input()
  isChecked: boolean;

  @Output()
  ontoggled = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onchange(event$) {
    this.ontoggled.emit(event$.srcElement.checked);
  }
}
