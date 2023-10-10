import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'weather-app';
  currentRoute:any='current-weather'
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['/current-weather'])
  }
  route(routerTab:any){
    this.currentRoute=routerTab
    this.router.navigate([routerTab])

  }
 
}
