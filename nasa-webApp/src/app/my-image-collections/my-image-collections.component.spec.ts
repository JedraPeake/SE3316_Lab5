import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageCollectionsComponent } from './my-image-collections.component';

describe('MyImageCollectionsComponent', () => {
  let component: MyImageCollectionsComponent;
  let fixture: ComponentFixture<MyImageCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImageCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
