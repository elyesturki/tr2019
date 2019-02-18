import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//import service ApiDataService
import { ApiDataService } from '../../services/api-data.service';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-moteur-search',
  templateUrl: './moteur-search.component.html',
  styleUrls: ['./moteur-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoteurSearchComponent implements OnInit {

   public cities: any= [];
   public model: any;

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {
    this.getCities()
  }

  public getCities() {
   this.apiDataService.getCities().subscribe((data: any) => {
     console.log("data: ",data)
      for (let i=0; i<data.length ; i++) {
        this.cities.push(data[i].name);
      }
      console.log("this.cities: ", this.cities);
    });
  }

  public selectCityOrigin = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cities.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  public selectCityDestination = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cities.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );



}
