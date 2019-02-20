import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolSearchComponent } from './vol-search.component';

describe('VolSearchComponent', () => {
  let component: VolSearchComponent;
  let fixture: ComponentFixture<VolSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
