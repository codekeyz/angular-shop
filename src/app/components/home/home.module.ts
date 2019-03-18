import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaleItemComponent } from './sale-item/sale-item.component';
import { SwitchModule } from '../widgets/switch/switch.module';
import { MastHeadModule } from '../widgets/mast-head/mast-head.module';
import { SidebarModule } from '../widgets/sidebar/sidebar.module';
import { Routes, RouterModule } from '@angular/router';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, SaleItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    SwitchModule,
    MastHeadModule,
    SidebarModule
  ],
  exports: [RouterModule]
})
export class HomeModule {}
