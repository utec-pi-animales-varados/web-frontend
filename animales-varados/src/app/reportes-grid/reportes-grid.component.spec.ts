import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesGridComponent } from './reportes-grid.component';

describe('ReportesGridComponent', () => {
  let component: ReportesGridComponent;
  let fixture: ComponentFixture<ReportesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
