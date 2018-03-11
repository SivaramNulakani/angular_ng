import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeStatusComponent } from './ee-status.component';

describe('EeStatusComponent', () => {
  let component: EeStatusComponent;
  let fixture: ComponentFixture<EeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
