import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewpicComponent } from './admin-viewpic.component';

describe('AdminViewpicComponent', () => {
  let component: AdminViewpicComponent;
  let fixture: ComponentFixture<AdminViewpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
