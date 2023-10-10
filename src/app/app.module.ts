import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { IonicModule } from '@ionic/angular';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'weather-forecast', component: WeatherForecastComponent },
  { path: '', redirectTo: '/current-weather', pathMatch: 'full' }, // Redirect to the default tab
];

@NgModule({
  declarations: [
    
    AppComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    FormsModule,
    HttpClientModule,

    IonicModule.forRoot()
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
