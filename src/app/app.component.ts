import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private formBuilder: FormBuilder) {}
  title = 'pokemon';
  pokemon: Pokemon
  formPokemon: FormGroup
  show = false


  ngOnInit() {
    this.formPokemon = this.formBuilder.group({
      favorite: ['']
    })
  }


  pokemonSubmit() {
    const { favorite } = this.formPokemon.value
    this.show = false
    this.loadPokemon(favorite)
  }

  loadPokemon(name: string) {
    this.pokemonService.loadPokemonFavorite(name).subscribe(
      (pokemon) => {
        this.pokemon = pokemon
        this.show = true
      }
    )
  }
}
