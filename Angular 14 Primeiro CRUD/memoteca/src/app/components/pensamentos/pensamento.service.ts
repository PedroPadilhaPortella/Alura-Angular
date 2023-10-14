import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly BASE_API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  getPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.BASE_API);
  }

  getPensamentoById(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.BASE_API}/${id}`);
  }

  createPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.BASE_API, pensamento);
  }

  deletePensamento(id: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.BASE_API}/${id}`);
  }

  updatePensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.BASE_API}/${pensamento.id}`, pensamento);
  }
}
