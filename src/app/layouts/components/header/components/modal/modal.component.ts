import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {
  public isLoginMode = false;

  public onToggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
