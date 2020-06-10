import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaClienteComponent } from './cola-cliente.component';

describe('ColaClienteComponent', () => {
  let component: ColaClienteComponent;
  let fixture: ComponentFixture<ColaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
