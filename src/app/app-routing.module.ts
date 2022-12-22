import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';


import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { combineLatest } from 'rxjs';


const routes: Routes = [
{ path: '', component: ListProductsComponent},
{ path: 'add', component: AddEditProductComponent},
{ path: 'edit/:id', component: AddEditProductComponent},
{ path: '**', redirectTo: '', pathMatch:'full'}
];


@NgModule({

  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
