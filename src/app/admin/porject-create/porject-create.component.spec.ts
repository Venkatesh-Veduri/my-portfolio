import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectCreateComponent } from './porject-create.component';

describe('PorjectCreateComponent', () => {
  let component: PorjectCreateComponent;
  let fixture: ComponentFixture<PorjectCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjectCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
