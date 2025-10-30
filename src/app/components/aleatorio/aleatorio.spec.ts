import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aleatorio } from './aleatorio';

describe('Aleatorio', () => {
  let component: Aleatorio;
  let fixture: ComponentFixture<Aleatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aleatorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aleatorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
