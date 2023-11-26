import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { ChannelsRoutingModule } from './channels.routing';
import { CardComponent, SortMenuComponent } from './components';

@NgModule({
  declarations: [
    ChannelsComponent,
    SortMenuComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ],
})
export class ChannelsModule { }
