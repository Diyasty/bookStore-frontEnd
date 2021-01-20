import { SaleItemsComponent } from './../home/components/sale-items/sale-items.component';
import { BtnLightComponent } from './components/btn-light/btn.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { UserComponent } from './components/user/user.component';

const r: Routes = [];
@NgModule({
  declarations: [BtnComponent, BtnLightComponent, SaleItemsComponent, UserComponent],
  imports: [CommonModule],

  exports: [BtnComponent, BtnLightComponent, SaleItemsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
