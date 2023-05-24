import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: FormGroup | any;

  @ViewChild('passwordEyeRegister', { read: ElementRef })
  passwordEye: ElementRef | undefined;

  passwordTypeInput = 'password';

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
  };

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.login = this.formBuilder.group({
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
    });
  }

  async submitLogin() {
    localStorage.clear();
    const login = this.login?.value;
    this.loginService.postLogin(login).then(async (res) => {
      if (res !== '') {
        await localStorage.setItem('token', res);
        localStorage.setItem('sesion', 'login');
        localStorage.setItem('username', login.username);
        this.router.navigate(['/home']);
      } else {
        this.alertError();
      }
    });
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

  getError(controlName: string) {
    let errors: any[] = [];
    const control = this.login.get(controlName);
    if (control.touched && control.errors !== null) {
      errors = JSON.parse(JSON.stringify(control.errors));
    }
    return errors;
  }

  registrar() {
    this.router.navigate(['/registrar']);
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
