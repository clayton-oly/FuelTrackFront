import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private apiUrl = 'https://localhost:7255/veiculos';

  constructor(private http: HttpClient) { }

  get(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  // getId(): Observable<number> {
  //   return this.http.get<Veiculo[]>(this.apiUrl).pipe(map( lista => lista.at(-1)?.id ?? 0));
  // }

  post(Veiculo: Veiculo): Observable<Veiculo[]> {
    console.log(this.apiUrl, + Veiculo)
    return this.http.post<Veiculo[]>(this.apiUrl, Veiculo)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}