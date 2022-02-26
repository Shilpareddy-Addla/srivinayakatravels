import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookyourtripComponent } from './bookyourtrip.component';

describe('BookyourtripComponent', () => {
  let component: BookyourtripComponent;
  let fixture: ComponentFixture<BookyourtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookyourtripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookyourtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
