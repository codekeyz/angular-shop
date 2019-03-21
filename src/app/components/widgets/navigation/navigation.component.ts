import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() cartTotal = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(category: string) {
    this.router.navigate(['home'], {
      queryParams: { category }
    });
  }
}
