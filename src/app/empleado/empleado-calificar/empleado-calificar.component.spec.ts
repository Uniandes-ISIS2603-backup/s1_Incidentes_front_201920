import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCalificarComponent } from './empleado-calificar.component';

describe('EmpleadoCalificarComponent', () => {
  let component: EmpleadoCalificarComponent;
  let fixture: ComponentFixture<EmpleadoCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
