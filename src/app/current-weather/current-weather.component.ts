// current-weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  cityName:any
  weatherData:any
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    
  }
  setCity(){
    this.weatherService.setCityName(this.cityName)
    this.searchWeather()
  }
  searchWeather() {
    // Call the WeatherService to fetch current weather data
    this.weatherService.getCurrentWeather(this.cityName).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
        // You can handle errors here, e.g., display an error message to the user
      }
    );
  }
}
