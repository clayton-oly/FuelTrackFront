import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'https://localhost:7255/usuarios';

  constructor(private http: HttpClient) { }

  get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // getId(): Observable<number> {
  //   return this.http.get<Usuario[]>(this.apiUrl).pipe(map( lista => lista.at(-1)?.id ?? 0));
  // }

  post(Usuario: Usuario): Observable<Usuario[]> {
    console.log(this.apiUrl, + Usuario)
    return this.http.post<Usuario[]>(this.apiUrl, Usuario)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}