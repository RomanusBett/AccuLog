import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FInputComponent } from './f-input.component';

describe('FInputComponent', () => {
  let component: FInputComponent;
  let fixture: ComponentFixture<FInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
