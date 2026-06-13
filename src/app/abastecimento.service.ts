import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Abastecimento } from '../models/abastecimento.model';

@Injectable({
  providedIn: 'root'
})
export class AbastecimentosService {
  private apiUrl = 'https://localhost:7255/abastecimentos';

  constructor(private http: HttpClient) { }

  get(): Observable<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(this.apiUrl);
  }

  // getId(): Observable<number> {
  //   return this.http.get<Abastecimento[]>(this.apiUrl).pipe(map( lista => lista.at(-1)?.id ?? 0));
  // }

  post(abastecimento: Abastecimento): Observable<Abastecimento[]> {
    console.log(this.apiUrl, abastecimento);
    return this.http.post<Abastecimento[]>(this.apiUrl, abastecimento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}