import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjscomponent } from './rxjscomponent';

describe('Rxjscomponent', () => {
  let component: Rxjscomponent;
  let fixture: ComponentFixture<Rxjscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
