import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticaComponent } from './optica.component';

describe('OpticaComponent', () => {
  let component: OpticaComponent;
  let fixture: ComponentFixture<OpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
