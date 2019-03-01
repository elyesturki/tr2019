import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoreOptionsComponent } from './search-more-options.component';

describe('SearchMoreOptionsComponent', () => {
  let component: SearchMoreOptionsComponent;
  let fixture: ComponentFixture<SearchMoreOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMoreOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoreOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
