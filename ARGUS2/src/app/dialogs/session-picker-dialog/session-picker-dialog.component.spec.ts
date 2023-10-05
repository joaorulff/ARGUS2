import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPickerDialogComponent } from './session-picker-dialog.component';

describe('SessionPickerDialogComponent', () => {
  let component: SessionPickerDialogComponent;
  let fixture: ComponentFixture<SessionPickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionPickerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
