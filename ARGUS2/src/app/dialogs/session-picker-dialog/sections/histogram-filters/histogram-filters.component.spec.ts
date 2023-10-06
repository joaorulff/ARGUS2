import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramFiltersComponent } from './histogram-filters.component';

describe('HistogramFiltersComponent', () => {
  let component: HistogramFiltersComponent;
  let fixture: ComponentFixture<HistogramFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistogramFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistogramFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
