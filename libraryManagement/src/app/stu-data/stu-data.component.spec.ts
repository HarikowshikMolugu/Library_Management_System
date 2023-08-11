import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDataComponent } from './stu-data.component';

describe('StuDataComponent', () => {
  let component: StuDataComponent;
  let fixture: ComponentFixture<StuDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuDataComponent]
    });
    fixture = TestBed.createComponent(StuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
