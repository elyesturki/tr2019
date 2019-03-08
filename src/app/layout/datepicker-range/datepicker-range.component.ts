import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

//https://github.com/DanielYKPan/date-time-picker
//https://github.com/DanielYKPan/owl-examples/tree/date-time-picker
// doc: https://daniel-projects.firebaseapp.com/owlng/date-time-picker
import { DateTimeAdapter } from 'ng-pick-datetime';

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerRangeComponent implements OnInit {

  yesterDay = new Date(new Date().setDate(new Date().getDate()-1));
  public dateTimeRange: Date[];
  public minDTRange2 = this.yesterDay
  public minDTRange3 = this.yesterDay

  public totalNuits : number = 0;

  constructor(dateTimeAdapter: DateTimeAdapter<any>) {
        dateTimeAdapter.setLocale('fr-FR'); // change locale to french
  }

  ngOnInit() {
  }

  setMinRange() {
    if (this.dateTimeRange) {
      this.minDTRange3 = new Date(new Date().setDate(new Date(this.dateTimeRange[0]).getDate()));
    }
  }
  getTotalDays(dateTimeRange) {
    if (dateTimeRange && dateTimeRange[0] && dateTimeRange[1]) {
      console.log("dateTimeRange: ",dateTimeRange)
      let dateFrom = dateTimeRange[0];
      let dateTo = dateTimeRange[1];
      // let diffEnMilliseconde = dateTo-dateFrom;
      // let diffEnHeures = ((dateTo-dateFrom)/1000)/3600;
      let diffEnDays = ((dateTo-dateFrom)/1000)/3600/24;
      this.totalNuits = Math.round(diffEnDays);
      return this.totalNuits;
    } else {
      return this.totalNuits = 0;
    }
  }

}
