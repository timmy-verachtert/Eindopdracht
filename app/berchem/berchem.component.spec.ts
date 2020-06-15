import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerchemComponent } from './berchem.component';

describe('BerchemComponent', () => {
  let component: BerchemComponent;
  let fixture: ComponentFixture<BerchemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerchemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerchemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
