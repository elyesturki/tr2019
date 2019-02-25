import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
//add ng-bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoteurSearchComponent } from './components/moteur-search/moteur-search.component';

import { ApiDataService } from './services/api-data.service';

import { HttpClientModule } from '@angular/common/http';
import { DatepickerRangeComponent } from './layout/datepicker-range/datepicker-range.component';
import { RoomsPersonsComponent, NgbdModalContent } from './layout/rooms-persons/rooms-persons.component';
import { DestinationCitiesComponent } from './layout/destination-cities/destination-cities.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { VolSearchComponent } from './components/vol-search/vol-search.component';
import { OriginCitiesComponent } from './layout/origin-cities/origin-cities.component';
import { PassengersComponent } from './layout/passengers/passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoteurSearchComponent,
    DatepickerRangeComponent,
    RoomsPersonsComponent,
    DestinationCitiesComponent,
    HotelSearchComponent,
    VolSearchComponent,
    OriginCitiesComponent,
    PassengersComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ApiDataService],
  entryComponents: [NgbdModalContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
