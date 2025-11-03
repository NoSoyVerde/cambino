import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterResponse, Episode } from '../model/rickMortyInterface';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://rickandmortyapi.com/api';

  getCharacters(page: number = 1): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.API_URL}/character?page=${page}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/character/${id}`);
  }

  searchCharacters(name: string): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.API_URL}/character?name=${name}`);
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.API_URL}/episode/${id}`);
  }
}