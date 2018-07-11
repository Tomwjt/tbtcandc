import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeContentPaneComponent } from './swipe-content-pane.component';

describe('SwipeContentPaneComponent', () => {
  let component: SwipeContentPaneComponent;
  let fixture: ComponentFixture<SwipeContentPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeContentPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeContentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
