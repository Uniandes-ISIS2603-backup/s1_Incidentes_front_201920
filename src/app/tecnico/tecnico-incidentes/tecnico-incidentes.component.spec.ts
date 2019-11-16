import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoIncidentesComponent } from './tecnico-incidentes.component';

describe('TecnicoIncidentesComponent', () => {
  let component: TecnicoIncidentesComponent;
  let fixture: ComponentFixture<TecnicoIncidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoIncidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
