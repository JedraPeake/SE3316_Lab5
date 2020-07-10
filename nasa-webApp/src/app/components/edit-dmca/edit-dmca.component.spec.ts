import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDmcaComponent } from './edit-dmca.component';

describe('EditDmcaComponent', () => {
  let component: EditDmcaComponent;
  let fixture: ComponentFixture<EditDmcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDmcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDmcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
