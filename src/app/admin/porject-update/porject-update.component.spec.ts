import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectUpdateComponent } from './porject-update.component';

describe('PorjectUpdateComponent', () => {
  let component: PorjectUpdateComponent;
  let fixture: ComponentFixture<PorjectUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjectUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
