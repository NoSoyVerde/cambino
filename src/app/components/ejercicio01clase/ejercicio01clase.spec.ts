import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio01clase } from './ejercicio01clase';

describe('Ejercicio01clase', () => {
  let component: Ejercicio01clase;
  let fixture: ComponentFixture<Ejercicio01clase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio01clase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio01clase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
