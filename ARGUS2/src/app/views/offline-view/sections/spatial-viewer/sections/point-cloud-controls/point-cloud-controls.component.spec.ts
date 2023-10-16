import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCloudControlsComponent } from './point-cloud-controls.component';

describe('PointCloudControlsComponent', () => {
  let component: PointCloudControlsComponent;
  let fixture: ComponentFixture<PointCloudControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCloudControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCloudControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
