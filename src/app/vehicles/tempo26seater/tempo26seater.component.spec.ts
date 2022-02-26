import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempo26seaterComponent } from './tempo26seater.component';

describe('Tempo26seaterComponent', () => {
  let component: Tempo26seaterComponent;
  let fixture: ComponentFixture<Tempo26seaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempo26seaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tempo26seaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
