import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlcuentaComponent } from './controlcuenta.component';

describe('ControlcuentaComponent', () => {
  let component: ControlcuentaComponent;
  let fixture: ComponentFixture<ControlcuentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlcuentaComponent]
    });
    fixture = TestBed.createComponent(ControlcuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
