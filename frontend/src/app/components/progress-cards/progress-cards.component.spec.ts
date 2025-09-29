import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCardsComponent } from './progress-cards.component';

describe('ProgressCardsComponent', () => {
  let component: ProgressCardsComponent;
  let fixture: ComponentFixture<ProgressCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
