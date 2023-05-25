import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuariosUrl: string = environment.baseUrl + 'usuario-rest';
  private token: string = 'kz2px152FAWlkHbkZoCiXgBAd-S8SSjF';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET detalles del usuario por id desde el servidor. Será 404 si no se encuentra el id. */
  getUsuarioDetails(id: number | null | string): Observable<Usuario> {
    const url = `${this.usuariosUrl}s/${id}`;
    console.log(id);
    return this.http.get<Usuario>(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched usuario con id = ${id}`)),
      catchError(this.handleError<Usuario>(`getUsuarioDetails id=${id}`))
    );
  }

  /**
   * Manejar la operación Http que falló.
   * Dejar que la aplicación continúe.
   *
   * @param operation - nombre de la operación que ha fallado
   * @param result - valor opcional a devolver como resultado observable
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: enviar el error a la infraestructura de registro remoto
      console.error(error);

      // TODO: mejor trabajo de transformación del error para el consumo del usuario
      console.log(`${operation} fallido: ${error.message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado vacío.
      return of(result as T);
    };
  }
}
