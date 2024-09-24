import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  // https://restcountries.com/v2/name/ecuador

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(codigoPais: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${codigoPais}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const params = new HttpParams().set(
      'fields',
      'name,capital,alpha2code,flag,population'
    );
    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params });
  }
}
