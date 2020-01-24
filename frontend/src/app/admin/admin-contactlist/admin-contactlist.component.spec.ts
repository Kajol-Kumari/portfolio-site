import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactlistComponent } from './admin-contactlist.component';

describe('AdminContactlistComponent', () => {
  let component: AdminContactlistComponent;
  let fixture: ComponentFixture<AdminContactlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContactlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
