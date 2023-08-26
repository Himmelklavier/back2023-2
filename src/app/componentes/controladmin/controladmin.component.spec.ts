import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladminComponent } from './controladmin.component';

describe('ControladminComponent', () => {
  let component: ControladminComponent;
  let fixture: ComponentFixture<ControladminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControladminComponent]
    });
    fixture = TestBed.createComponent(ControladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
