import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmOperationsComponent } from './abm-operations.component';

describe('AbmOperationsComponent', () => {
  let component: AbmOperationsComponent;
  let fixture: ComponentFixture<AbmOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
