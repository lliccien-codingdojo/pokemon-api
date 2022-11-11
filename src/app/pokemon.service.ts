import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }


  loadPokemonFavorite(name: string) {
    const url = `${environment.baseUrl}pokemon/${name}`
    return this.httpClient.get<Pokemon>(url)
  }

}
