import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Login {
  telefono: string;
  password: string;
}

interface Registro {
  username: string;
  password: string;
  alu_nombre: string;
  alu_apellido: string;
  alu_peso: number;
  alu_nacimiento: Date | null | undefined;
  alu_sexo: number;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = 'http://timeplanner.test/usuario-rests';

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  postLogin(login: Login): Promise<any> {
    return this.http
      .post(this.baseUrl + '/login', login, this.httpHeader)
      .toPromise()
      .then((res) => res);
  }

  postRegistrar(registro: Registro): Promise<any> {
    return this.http
      .post(this.baseUrl + '/registrar', registro, this.httpHeader)
      .toPromise()
      .then((res) => res);
  }
}
