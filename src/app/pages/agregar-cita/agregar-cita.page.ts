import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.page.html',
  styleUrls: ['./agregar-cita.page.scss'],
})
export class AgregarCitaPage implements OnInit {
  public agregarCita: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private location: Location) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.agregarCita = this.formBuilder.group({
      cit_asunto: [],
      cit_numdoctor: [],
      cit_doctor: [],
      cit_fecha: [],
    });
  }

  regresar(): void {
    this.location.back();
  }
}
