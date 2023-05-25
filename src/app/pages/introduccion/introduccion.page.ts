import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage implements OnInit {
  private sesionado: any = null;

  constructor(
    private usuarioService: UsuariosService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadSesionado();
  }

  async loadSesionado() {
    if (localStorage.getItem('username') !== null) {
      try {
        this.usuarioService
          .getUsuarioDetails(localStorage.getItem('username'))
          .subscribe(async (res) => {
            this.sesionado = res;
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
          'Nos alegra que estés aquí <b>' + this.sesionado.usu_nombre + '</b>',
        cssClass: 'alert-center',
        buttons: ['Continuar'],
      });
      await alert.present();
      localStorage.removeItem('sesion');
    }
  }
}
