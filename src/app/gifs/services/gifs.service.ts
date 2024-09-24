import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private url: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'qS6SXSjJEInm9jkFsEjUFiVMz2jSUQxA';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http
      .get<SearchGIFResponse>(`${this.url}/search`, { params })
      .subscribe((res) => {
        this.resultados = res.data;
        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados));
      });
  }
}
