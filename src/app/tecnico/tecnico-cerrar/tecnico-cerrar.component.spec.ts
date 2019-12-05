import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoCerrarComponent } from './tecnico-cerrar.component';

describe('TecnicoCerrarComponent', () => {
  let component: TecnicoCerrarComponent;
  let fixture: ComponentFixture<TecnicoCerrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoCerrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoCerrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
