import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const CART_ROUTES : Routes = [
  {
    path: '',
    component: CartComponent
  }
]

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CART_ROUTES),
  ],
  exports: [RouterModule]
})
export class CartModule {}
