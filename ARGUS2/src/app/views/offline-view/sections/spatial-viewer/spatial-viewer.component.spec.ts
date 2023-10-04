import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialViewerComponent } from './spatial-viewer.component';

describe('SpatialViewerComponent', () => {
  let component: SpatialViewerComponent;
  let fixture: ComponentFixture<SpatialViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpatialViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpatialViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
