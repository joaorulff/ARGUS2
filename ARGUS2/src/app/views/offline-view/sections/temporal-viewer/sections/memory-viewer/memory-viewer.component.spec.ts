import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryViewerComponent } from './memory-viewer.component';

describe('MemoryViewerComponent', () => {
  let component: MemoryViewerComponent;
  let fixture: ComponentFixture<MemoryViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
