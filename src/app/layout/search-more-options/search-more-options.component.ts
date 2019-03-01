import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

//link:https://angular-slider.github.io/ng5-slider/demos
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-search-more-options',
  templateUrl: './search-more-options.component.html',
  styleUrls: ['./search-more-options.component.scss']
})
export class SearchMoreOptionsComponent implements OnInit {

  showMoreOptions = false;

  constructor() { }

  ngOnInit() {
    // this.timeout();
  }

  toggleMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions ? true : false
  }

  // ng5-slider
  minValue: number = 0;
  maxValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number): string => {
      return value+' €';
    },
    combineLabels: (minValue: string, maxValue: string): string => {
      return 'from ' + minValue + ' up to ' + maxValue;
    }
  };

  // timeout() {
  //   var that = this;
  //   setTimeout(function () {
  //       console.log('Test');
  //       that.timeout();
  //   }, 1000);
  // }


}
