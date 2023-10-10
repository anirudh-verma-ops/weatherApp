// weather-forecast.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
// import{scroll}

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  cityName: string = '';
  forecastData: any;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {

   this.cityName=this.weatherService.getCityname()
   if(this.cityName){
    this.getWeatherForecast()

   }
  }

  getWeatherForecast() {
    // Call the WeatherService to fetch weather forecast data
    this.weatherService.getWeatherForecast(this.cityName).subscribe(
      (data) => {
        this.forecastData = data;
      },
      (error) => {
        console.error('Error fetching weather forecast data:', error);
        // You can handle errors here, e.g., display an error message to the user
      }
    );
  }
}
