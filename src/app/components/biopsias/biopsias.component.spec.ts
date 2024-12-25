import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopsiasComponent } from './biopsias.component';

describe('BiopsiasComponent', () => {
  let component: BiopsiasComponent;
  let fixture: ComponentFixture<BiopsiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiopsiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopsiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
