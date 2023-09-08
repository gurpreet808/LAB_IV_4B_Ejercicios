import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosClase01Component } from './ejercicios-clase01.component';

describe('EjerciciosClase01Component', () => {
  let component: EjerciciosClase01Component;
  let fixture: ComponentFixture<EjerciciosClase01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerciciosClase01Component]
    });
    fixture = TestBed.createComponent(EjerciciosClase01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
