import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHttpOperationsComponent } from './server-http-operations.component';

describe('ServerHttpOperationsComponent', () => {
  let component: ServerHttpOperationsComponent;
  let fixture: ComponentFixture<ServerHttpOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerHttpOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerHttpOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
