import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDetailListComponent } from './tecnico-detail-list.component';

describe('TecnicoDetailListComponent', () => {
  let component: TecnicoDetailListComponent;
  let fixture: ComponentFixture<TecnicoDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
