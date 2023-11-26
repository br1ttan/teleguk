import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-localize-switcher',
  templateUrl: './localize-switcher.component.html',
  styleUrls: ['./localize-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalizeSwitcherComponent { }
