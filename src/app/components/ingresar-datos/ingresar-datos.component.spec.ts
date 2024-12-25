import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarDatosComponent } from './ingresar-datos.component';

describe('IngresarDatosComponent', () => {
  let component: IngresarDatosComponent;
  let fixture: ComponentFixture<IngresarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresarDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
