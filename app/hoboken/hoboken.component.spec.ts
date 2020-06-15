import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobokenComponent } from './hoboken.component';

describe('HobokenComponent', () => {
  let component: HobokenComponent;
  let fixture: ComponentFixture<HobokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
