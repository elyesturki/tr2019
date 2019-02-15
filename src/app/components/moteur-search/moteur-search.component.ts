import { Component, OnInit } from '@angular/core';

//import service ApiDataService
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-moteur-search',
  templateUrl: './moteur-search.component.html',
  styleUrls: ['./moteur-search.component.scss']
})
export class MoteurSearchComponent implements OnInit {

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {
    this.getCities()
  }

  public getCities() {
   this.apiDataService.getCities().subscribe((data) => {
      console.log("data: ", data);
    });
  }

}
