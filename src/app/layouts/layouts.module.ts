import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule, HeaderModule, MainComponent, SidebarModule } from './components';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class LayoutsModule { }
