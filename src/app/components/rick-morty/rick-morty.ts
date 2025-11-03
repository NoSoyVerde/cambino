import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character } from '../../model/rickMortyInterface';

@Component({
  selector: 'app-rick-morty',
  imports: [CommonModule],
  templateUrl: './rick-morty.html',
  styleUrls: ['./rick-morty.css']
})
export class RickMortyComponent {
  private rickMortyService = inject(RickMortyService);
  
  characters = signal<Character[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  currentPage = signal(1);
  totalPages = signal(1);

  constructor() {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.loading.set(true);
    this.error.set(null);
    
    this.rickMortyService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters.set(response.results);
        this.currentPage.set(page);
        this.totalPages.set(response.info.pages);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set('Error al cargar los personajes');
        this.loading.set(false);
        console.error('Error:', error);
      }
    });
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.loadCharacters(this.currentPage() - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.loadCharacters(this.currentPage() + 1);
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Alive': return 'badge bg-success';
      case 'Dead': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }
}