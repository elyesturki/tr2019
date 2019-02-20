import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPersonsComponent } from './rooms-persons.component';

describe('RoomsPersonsComponent', () => {
  let component: RoomsPersonsComponent;
  let fixture: ComponentFixture<RoomsPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
