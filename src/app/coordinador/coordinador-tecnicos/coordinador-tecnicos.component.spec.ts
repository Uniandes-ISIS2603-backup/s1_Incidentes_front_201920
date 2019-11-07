import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorTecnicosComponent } from './coordinador-tecnicos.component';

describe('CoordinadorTecnicosComponent', () => {
  let component: CoordinadorTecnicosComponent;
  let fixture: ComponentFixture<CoordinadorTecnicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorTecnicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
