import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Output()
  public clickEventEmitter = new EventEmitter<Event>();

  public get isFormInvalid(): boolean {
    return this.formGroup.invalid;
  }
  
  public readonly formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  
  public isFormDisabled = false;

  public onButtonClick(): void {
    this.clickEventEmitter.emit();
  }

  public onFormSubmit(): void {
    if (this.formGroup.invalid) return;

    const values = this.formGroup.value;

    this.isFormDisabled = true;

    setTimeout(() => {
      this.formGroup.reset();
      this.isFormDisabled = false;
    }, 1000);

    console.log(values);
  }
}
