import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopersComponent { }
