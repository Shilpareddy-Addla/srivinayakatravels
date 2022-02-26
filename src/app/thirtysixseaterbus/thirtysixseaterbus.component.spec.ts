import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtysixseaterbusComponent } from './thirtysixseaterbus.component';

describe('ThirtysixseaterbusComponent', () => {
  let component: ThirtysixseaterbusComponent;
  let fixture: ComponentFixture<ThirtysixseaterbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtysixseaterbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtysixseaterbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
