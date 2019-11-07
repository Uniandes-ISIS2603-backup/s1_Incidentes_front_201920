import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorCreateComponent } from './coordinador-create.component';

describe('CoordinadorCreateComponent', () => {
  let component: CoordinadorCreateComponent;
  let fixture: ComponentFixture<CoordinadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
