import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  baseUrl: string = 'http://timeplanner.test/usuario-rest';
  token: string = 'kz2px152FAWlkHbkZoCiXgBAd-S8SSjF';
  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUsuarioDetails(id: string | null) {
    console.log(id);
    return this.http.get(this.baseUrl + 's/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
