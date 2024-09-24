import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPaisesComponent } from './sidebar-paises/sidebar-paises.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarPaisesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarPaisesComponent
  ]
})
export class SharedPaisesModule { }
