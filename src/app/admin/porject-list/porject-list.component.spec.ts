import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectListComponent } from './porject-list.component';

describe('PorjectListComponent', () => {
  let component: PorjectListComponent;
  let fixture: ComponentFixture<PorjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
