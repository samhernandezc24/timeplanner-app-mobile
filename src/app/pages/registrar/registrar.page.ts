import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public registro: FormGroup | any;

  @ViewChild('passwordEyeRegister', { read: ElementRef })
  passwordEye: ElementRef | undefined;

  passwordTypeInput = 'password';

  sexos = [
    { sex_id: '1', sex_sexo: 'Masculino' },
    { sex_id: '2', sex_sexo: 'Femenino' },
  ];

  validation_messages: any = {
    telefono: [
      { type: 'required', message: 'El teléfono es requerido.' },
      {
        type: 'minlength',
        message: 'El número de teléfono debe contener al menos 10 dígitos.',
      },
      {
        type: 'maxlength',
        message: 'El número de teléfono no puede contener más de 15 dígitos.',
      },
      {
        type: 'pattern',
        message: 'Dígita un número de télefono válido.',
      },
    ],
    password: [
      { type: 'required', message: 'La contraseña es requerida.' },
      {
        type: 'minlength',
        message: 'La contraseña debe contener al menos 8 caracteres.',
      },
      {
        type: 'pattern',
        message: 'Dígita una contraseña válida.',
      },
    ],
    password_confirm: [
      {
        type: 'required',
        message: 'La contraseña de confirmación es requerida.',
      },
      {
        type: 'minlength',
        message: 'La contraseña debe contener al menos 8 caracteres.',
      },
      {
        type: 'pattern',
        message: 'Dígita una contraseña válida.',
      },
      {
        type: 'notEquivalent',
        message: 'Las contraseñas no coinciden.',
      },
    ],
    sexo: [{ type: 'required', message: 'Debe indicar su sexo.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.registro = this.formBuilder.group(
      {
        telefono: [
          '',
          Validators.compose([
            Validators.maxLength(15),
            Validators.minLength(10),
            Validators.pattern('^[0-9]+$'),
            Validators.required,
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[-!#$%&/()?¡_])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,50}$'
            ),
            Validators.required,
          ]),
        ],
        password_confirm: [
          '',
          Validators.compose([
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[-!#$%&/()?¡_])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,50}$'
            ),
            Validators.required,
          ]),
        ],
        sexo: ['', [Validators.required]],
      },
      {
        validator: this.checkIfMatchingPasswords(
          'password',
          'password_confirm'
        ),
      }
    );
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  async submitRegistrar() {
    localStorage.clear();
    const registro = this.registro.value;
    console.log('registro');
    this.alertError();

    /* if (err.status === 422) {
        this.alertDuplicado
    } */
  }

  private async alertError() {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      subHeader: 'Error',
      message:
        'El número de teléfono o contraseña no son correctos. Por favor inténtelo de nuevo.',
      cssClass: 'alert-center',
      buttons: ['Corregir'],
    });

    await alert.present();
  }

  private async alertDuplicado() {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      subHeader: 'Duplicado',
      message: 'Este número de teléfono ya se encuentra registrado.',
      cssClass: 'alert-center',
      buttons: ['Corregir'],
    });

    await alert.present();
  }

  getError(controlName: string) {
    let errors: any[] = [];
    const control = this.registro.get(controlName);
    if (control.touched && control.errors !== null) {
      errors = JSON.parse(JSON.stringify(control.errors));
    }
    return errors;
  }

  login() {
    this.router.navigate(['/']);
  }

  togglePasswordMode() {
    const e = window.event;
    e?.preventDefault();
    this.passwordTypeInput =
      this.passwordTypeInput === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye?.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }
}
