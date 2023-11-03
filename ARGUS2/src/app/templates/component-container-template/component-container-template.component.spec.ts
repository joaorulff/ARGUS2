import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContainerTemplateComponent } from './component-container-template.component';

describe('ComponentContainerTemplateComponent', () => {
  let component: ComponentContainerTemplateComponent;
  let fixture: ComponentFixture<ComponentContainerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentContainerTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentContainerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
