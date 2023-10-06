import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSearchBarComponent } from './keyword-search-bar.component';

describe('KeywordSearchBarComponent', () => {
  let component: KeywordSearchBarComponent;
  let fixture: ComponentFixture<KeywordSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
