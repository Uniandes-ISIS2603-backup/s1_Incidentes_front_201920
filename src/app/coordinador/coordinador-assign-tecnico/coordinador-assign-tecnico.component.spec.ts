import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorAssignTecnicoComponent } from './coordinador-assign-tecnico.component';

describe('CoordinadorAssignTecnicoComponent', () => {
  let component: CoordinadorAssignTecnicoComponent;
  let fixture: ComponentFixture<CoordinadorAssignTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorAssignTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorAssignTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
