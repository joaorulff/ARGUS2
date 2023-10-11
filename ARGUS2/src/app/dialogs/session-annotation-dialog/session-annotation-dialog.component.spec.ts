import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAnnotationDialogComponent } from './session-annotation-dialog.component';

describe('SessionAnnotationDialogComponent', () => {
  let component: SessionAnnotationDialogComponent;
  let fixture: ComponentFixture<SessionAnnotationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionAnnotationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionAnnotationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
