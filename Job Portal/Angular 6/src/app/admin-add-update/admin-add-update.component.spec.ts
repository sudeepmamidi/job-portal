import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddUpdateComponent } from './admin-add-update.component';

describe('AdminAddUpdateComponent', () => {
  let component: AdminAddUpdateComponent;
  let fixture: ComponentFixture<AdminAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
