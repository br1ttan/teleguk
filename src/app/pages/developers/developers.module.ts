import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersComponent } from './developers.component';
import { DevelopersRoutingModule } from './developers.routing';
import { CardComponent, SortMenuComponent } from './components';

@NgModule({
  declarations: [
    DevelopersComponent,
    SortMenuComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule
  ],
})
export class DevelopersModule { }
