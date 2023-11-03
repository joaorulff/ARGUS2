import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasoningViewerComponent } from './reasoning-viewer.component';

describe('ReasoningViewerComponent', () => {
  let component: ReasoningViewerComponent;
  let fixture: ComponentFixture<ReasoningViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasoningViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasoningViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
