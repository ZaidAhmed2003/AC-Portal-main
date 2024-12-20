import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutomationComponent } from './add-automation.component';

describe('AddAutomationComponent', () => {
  let component: AddAutomationComponent;
  let fixture: ComponentFixture<AddAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
