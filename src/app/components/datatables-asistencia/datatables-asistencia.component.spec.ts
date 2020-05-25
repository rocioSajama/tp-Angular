import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesAsistenciaComponent } from './datatables-asistencia.component';

describe('DatatablesAsistenciaComponent', () => {
  let component: DatatablesAsistenciaComponent;
  let fixture: ComponentFixture<DatatablesAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
