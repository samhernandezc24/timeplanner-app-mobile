import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-familiar',
  templateUrl: './familiar.page.html',
  styleUrls: ['./familiar.page.scss'],
})
export class FamiliarPage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  regresar(): void {
    this.location.back();
  }
}
