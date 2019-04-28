import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentPreviewComponent } from './fragment-preview.component';

describe('FragmentPreviewComponent', () => {
  let component: FragmentPreviewComponent;
  let fixture: ComponentFixture<FragmentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragmentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
