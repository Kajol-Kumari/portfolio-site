import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloglistComponent } from './admin-bloglist.component';

describe('AdminBloglistComponent', () => {
  let component: AdminBloglistComponent;
  let fixture: ComponentFixture<AdminBloglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBloglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
