import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  private apiKey = '6eb9f65323f3324813a08eb592909476';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  City:any
  

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.post(url,city);
  }

  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.post(url,city);
  }
  setCityName(val:String){
    this.City=val
  }
  getCityname(){
    return this.City
  }


}

