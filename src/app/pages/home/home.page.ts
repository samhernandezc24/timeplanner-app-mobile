import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios: any[] = [];
  private sesionado: any = null;

  constructor(
    private usuarioService: UsuariosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadSesionado();
    this.loadUsuarios();
  }

  async loadUsuarios() {
    this.usuarioService.getDatos().subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  async loadSesionado() {
    if (localStorage.getItem('username') !== null) {
      try {
        this.usuarioService
          .getUsuarioDetails(localStorage.getItem('username'))
          .subscribe(async (res) => {
            this.sesionado = await res;
            await this.loadBienvenida();
          });
      } catch (e) {
        console.log(e);
      }
      localStorage.removeItem('username');
    }
  }

  async loadBienvenida() {
    if (localStorage.getItem('sesion') === 'login') {
      const alert = await this.alertCtrl.create({
        header: 'Hola',
        subHeader: '¡Bienvenido a TimePlanner!',
        message:
          'Nos alegra que estés aquí <b>' + this.sesionado.completo + '</b>',
        cssClass: 'alert-center',
        buttons: ['Continuar'],
      });
      await alert.present();
      localStorage.removeItem('sesion');
    }
  }
}
