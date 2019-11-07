import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorIncidentesComponent } from './coordinador-incidentes.component';

describe('CoordinadorIncidentesComponent', () => {
  let component: CoordinadorIncidentesComponent;
  let fixture: ComponentFixture<CoordinadorIncidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorIncidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
