import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saludoenrutado } from './saludoenrutado';

describe('Saludoenrutado', () => {
  let component: Saludoenrutado;
  let fixture: ComponentFixture<Saludoenrutado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saludoenrutado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saludoenrutado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
