import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDataComponent } from './librarian-data.component';

describe('LibrarianDataComponent', () => {
  let component: LibrarianDataComponent;
  let fixture: ComponentFixture<LibrarianDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrarianDataComponent]
    });
    fixture = TestBed.createComponent(LibrarianDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
