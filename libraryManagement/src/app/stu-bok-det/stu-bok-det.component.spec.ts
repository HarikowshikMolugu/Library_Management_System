import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuBokDetComponent } from './stu-bok-det.component';

describe('StuBokDetComponent', () => {
  let component: StuBokDetComponent;
  let fixture: ComponentFixture<StuBokDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuBokDetComponent]
    });
    fixture = TestBed.createComponent(StuBokDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
