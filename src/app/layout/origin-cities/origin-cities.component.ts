import { Component, OnInit } from '@angular/core';
//import service ApiDataService
import { ApiDataService } from '../../services/api-data.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-origin-cities',
  templateUrl: './origin-cities.component.html',
  styleUrls: ['./origin-cities.component.scss']
})
export class OriginCitiesComponent implements OnInit {

  public cities: any= [];

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {
    this.getCities()
  }

  public getCities() {
   this.apiDataService.getCities().subscribe((data: any) => {
      for (let i=0; i<data.length ; i++) {
        this.cities.push(data[i].name);
      }
      console.log("Origin: ", this.cities);
    });
  }

  public selectCityOrigin = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cities.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

}
