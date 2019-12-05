import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoReabrirComponent } from './empleado-reabrir.component';

describe('EmpleadoReabrirComponent', () => {
  let component: EmpleadoReabrirComponent;
  let fixture: ComponentFixture<EmpleadoReabrirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoReabrirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoReabrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
