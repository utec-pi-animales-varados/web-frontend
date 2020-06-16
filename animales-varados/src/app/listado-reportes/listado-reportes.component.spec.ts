import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReportesComponent } from './listado-reportes.component';

describe('ListadoReportesComponent', () => {
  let component: ListadoReportesComponent;
  let fixture: ComponentFixture<ListadoReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
