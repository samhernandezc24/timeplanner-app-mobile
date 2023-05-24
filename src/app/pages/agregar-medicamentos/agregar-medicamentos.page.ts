import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-medicamentos',
  templateUrl: './agregar-medicamentos.page.html',
  styleUrls: ['./agregar-medicamentos.page.scss'],
})
export class AgregarMedicamentosPage implements OnInit {
  public agregarMedicamentos: FormGroup | any;

  medicamentos = [
    { med_id: '1', med_medicamento: 'Med 1' },
    { med_id: '2', med_medicamento: 'Med 2' },
  ];

  constructor(private formBuilder: FormBuilder, private location: Location) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.agregarMedicamentos = this.formBuilder.group({
      med_nombre: [],
      med_tipo: [],
      med_nota: [],
      med_dosis: [],
      med_horario: [],
    });
  }

  regresar(): void {
    this.location.back();
  }
}
