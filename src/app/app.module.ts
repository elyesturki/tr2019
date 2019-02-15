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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoteurSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
