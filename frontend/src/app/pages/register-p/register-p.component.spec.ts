import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPComponent } from './register-p.component';

describe('RegisterPComponent', () => {
  let component: RegisterPComponent;
  let fixture: ComponentFixture<RegisterPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
