import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerceptionViewerComponent } from './perception-viewer.component';

describe('PerceptionViewerComponent', () => {
  let component: PerceptionViewerComponent;
  let fixture: ComponentFixture<PerceptionViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerceptionViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerceptionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
