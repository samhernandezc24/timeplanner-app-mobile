import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  introduccion(): void {
    this.router.navigate(['/introduccion']);
  }
}
