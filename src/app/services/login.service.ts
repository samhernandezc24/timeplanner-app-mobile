import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Login {
  username: string;
  password: string;
}

interface Registro {
  username: string;
  password: string;
  usu_nombre: string;
  usu_apellido: string;
  usu_sexo: number;
  usu_nacimiento: Date | null | undefined;
  usu_peso: number;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl: string = environment.baseUrl + 'usuario-rests';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  async postLogin(login: Login): Promise<any> {
    const res = await this.http
      .post(this.loginUrl + '/login', login, this.httpOptions)
      .toPromise();
    return res;
  }

  async postRegistrar(registro: Registro): Promise<any> {
    const res = await this.http
      .post(this.loginUrl + '/registrar', registro, this.httpOptions)
      .toPromise();
    return res;
  }
}
