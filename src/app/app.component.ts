import { Component, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';
import { User } from './user.interface';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  posts: any;
  service: any;
  users = [];
  constructor(private weatherData: WeatherService) {}

  ngOnInit() {
    this.weatherData.getUsers().subscribe((result: User[]) => {
      console.log(result);
      this.users = result;
    });
  }
}
