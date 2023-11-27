import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

enum Role {
  Customer = 'customer',
  Seller = 'seller'
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../../styles/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  @Output()
  public clickEventEmitter = new EventEmitter<Event>();

  public get isFormInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public readonly formGroup = new FormGroup({
    checkbox: new FormControl<boolean>(false, [Validators.requiredTrue]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  
  public readonly roles = Role;
  public isFormDisabled = false;
  public role = Role.Customer;


  public onButtonClick(): void {
    this.clickEventEmitter.emit();
  }

  public onRoleChange(role: Role): void {
    this.role = role;
  }

  public onFormSubmit(): void {
    if (this.formGroup.invalid) return;

    const values = {...this.formGroup.value, role: this.role};
    const { checkbox, ...rest } = values;

    this.isFormDisabled = true;

    setTimeout(() => {
      this.formGroup.reset();
      this.isFormDisabled = false;
    }, 1000);
    console.log(rest);
  }
}
