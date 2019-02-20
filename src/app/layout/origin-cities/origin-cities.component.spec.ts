import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginCitiesComponent } from './origin-cities.component';

describe('OriginCitiesComponent', () => {
  let component: OriginCitiesComponent;
  let fixture: ComponentFixture<OriginCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
