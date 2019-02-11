import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoteurSearchComponent } from './moteur-search.component';

describe('MoteurSearchComponent', () => {
  let component: MoteurSearchComponent;
  let fixture: ComponentFixture<MoteurSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoteurSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoteurSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
