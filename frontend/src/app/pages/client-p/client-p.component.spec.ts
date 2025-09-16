import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPComponent } from './client-p.component';

describe('ClientPComponent', () => {
  let component: ClientPComponent;
  let fixture: ComponentFixture<ClientPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
