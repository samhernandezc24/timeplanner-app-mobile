import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  regresar(): void {
    this.location.back();
  }

  async logout() {
    localStorage.clear();
    await this.modalCtrl.dismiss();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
