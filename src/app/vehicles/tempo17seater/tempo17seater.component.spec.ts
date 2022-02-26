import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempo17seaterComponent } from './tempo17seater.component';

describe('Tempo17seaterComponent', () => {
  let component: Tempo17seaterComponent;
  let fixture: ComponentFixture<Tempo17seaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempo17seaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tempo17seaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
