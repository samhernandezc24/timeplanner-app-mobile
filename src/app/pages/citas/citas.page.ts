import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  regresar(): void {
    this.location.back();
  }
}
