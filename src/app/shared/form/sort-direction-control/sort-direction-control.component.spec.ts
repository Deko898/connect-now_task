import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDirectionControlComponent } from './sort-direction-control.component';

describe('SortDirectionControlComponent', () => {
  let component: SortDirectionControlComponent;
  let fixture: ComponentFixture<SortDirectionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortDirectionControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortDirectionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
