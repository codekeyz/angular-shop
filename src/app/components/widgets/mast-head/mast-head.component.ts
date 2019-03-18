import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mast-head',
  templateUrl: './mast-head.component.html',
  styleUrls: ['./mast-head.component.css']
})
export class MastHeadComponent implements OnInit {
  @Input() title = 'Sale';

  @Input() bgcolor = '#3b60ed';

  @Input() bgimg = 'banner-ppl.png';

  constructor() {}

  ngOnInit() {}
}
