import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgerhoutComponent } from './borgerhout.component';

describe('BorgerhoutComponent', () => {
  let component: BorgerhoutComponent;
  let fixture: ComponentFixture<BorgerhoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgerhoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgerhoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
