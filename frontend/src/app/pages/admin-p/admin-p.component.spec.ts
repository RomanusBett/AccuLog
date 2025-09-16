import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPComponent } from './admin-p.component';

describe('AdminPComponent', () => {
  let component: AdminPComponent;
  let fixture: ComponentFixture<AdminPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
