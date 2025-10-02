import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniFooterComponent } from './uni-footer.component';

describe('UniFooterComponent', () => {
  let component: UniFooterComponent;
  let fixture: ComponentFixture<UniFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
