import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RickMortyComponent } from './rick-morty';
import { RickMortyService } from '../../services/rick-morty.service';
import { of } from 'rxjs';

describe('RickMortyComponent', () => {
  let component: RickMortyComponent;
  let fixture: ComponentFixture<RickMortyComponent>;
  let mockRickMortyService: jasmine.SpyObj<RickMortyService>;

  const mockCharacterResponse = {
    info: {
      count: 826,
      pages: 42,
      next: 'https://rickandmortyapi.com/api/character?page=2',
      prev: null
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive' as const,
        species: 'Human',
        type: '',
        gender: 'Male' as const,
        origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
        location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z'
      }
    ]
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('RickMortyService', ['getCharacters']);

    await TestBed.configureTestingModule({
      imports: [RickMortyComponent, HttpClientTestingModule],
      providers: [
        { provide: RickMortyService, useValue: spy }
      ]
    }).compileComponents();

    mockRickMortyService = TestBed.inject(RickMortyService) as jasmine.SpyObj<RickMortyService>;
    mockRickMortyService.getCharacters.and.returnValue(of(mockCharacterResponse));

    fixture = TestBed.createComponent(RickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    expect(mockRickMortyService.getCharacters).toHaveBeenCalledWith(1);
    expect(component.characters().length).toBe(1);
    expect(component.characters()[0].name).toBe('Rick Sanchez');
  });

  it('should return correct badge class for status', () => {
    expect(component.getStatusBadgeClass('Alive')).toBe('badge bg-success');
    expect(component.getStatusBadgeClass('Dead')).toBe('badge bg-danger');
    expect(component.getStatusBadgeClass('unknown')).toBe('badge bg-secondary');
  });
});