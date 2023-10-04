import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalViewerComponent } from './temporal-viewer.component';

describe('TemporalViewerComponent', () => {
  let component: TemporalViewerComponent;
  let fixture: ComponentFixture<TemporalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporalViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
