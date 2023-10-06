import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableContainerHorizontalComponent } from './scrollable-container-horizontal.component';

describe('ScrollableContainerHorizontalComponent', () => {
  let component: ScrollableContainerHorizontalComponent;
  let fixture: ComponentFixture<ScrollableContainerHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableContainerHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableContainerHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
