import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCitiesComponent } from './destination-cities.component';

describe('DestinationCitiesComponent', () => {
  let component: DestinationCitiesComponent;
  let fixture: ComponentFixture<DestinationCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
