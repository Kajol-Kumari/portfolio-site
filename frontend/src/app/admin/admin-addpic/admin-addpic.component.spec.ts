import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddpicComponent } from './admin-addpic.component';

describe('AdminAddpicComponent', () => {
  let component: AdminAddpicComponent;
  let fixture: ComponentFixture<AdminAddpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
