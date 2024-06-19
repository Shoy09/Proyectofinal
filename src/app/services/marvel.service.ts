import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private superheroApiUrl = 'https://www.superheroapi.com/api.php/586069776286026';
  private marvelApiUrl = 'https://gateway.marvel.com/v1/public';
  private marvelApiKey = '01302fe8616347c6decaf8fc30e088f9';
  private marvelHash = 'ba81f8fdf7e1f5233e29dc5a8d5a227a';

  constructor(private http: HttpClient) { }

  // Método para buscar héroes por nombre
  searchHeroes(name: string): Promise<any> {
    return this.http.get(`${this.superheroApiUrl}/search/${name}`).toPromise();
  }

  // Método para obtener detalles de un héroe por su ID
  getHeroDetails(id: number): Promise<any> {
    return this.http.get(`${this.marvelApiUrl}/characters/${id}?ts=1&apikey=${this.marvelApiKey}&hash=${this.marvelHash}`).toPromise();
  }

  // Método para obtener cómics de un héroe por su ID
  getHeroComics(id: number): Promise<any> {
    return this.http.get(`${this.marvelApiUrl}/characters/${id}/comics?ts=1&apikey=${this.marvelApiKey}&hash=${this.marvelHash}`).toPromise();
  }
}
