import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindClientsComponent } from './find-clients.component';

describe('FindClientsComponent', () => {
  let component: FindClientsComponent;
  let fixture: ComponentFixture<FindClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
