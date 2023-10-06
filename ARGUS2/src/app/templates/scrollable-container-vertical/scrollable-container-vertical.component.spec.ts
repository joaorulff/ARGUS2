import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableContainerVerticalComponent } from './scrollable-container-vertical.component';

describe('ScrollableContainerVerticalComponent', () => {
  let component: ScrollableContainerVerticalComponent;
  let fixture: ComponentFixture<ScrollableContainerVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableContainerVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableContainerVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
