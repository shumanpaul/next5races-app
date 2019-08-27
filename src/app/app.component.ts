import { Component } from '@angular/core';
import { NextToJumpItem } from './models/next-to-jump-item';
import { NextToJumpResponse } from './models/next-to-jump-response';
import { BetEasyApiService } from './services/bet-easy-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'next5races-app'; 
  nextRaces: NextToJumpItem[];
  noOfNextRaces: any;
  interval: any;

  constructor(private beteasyapi: BetEasyApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {

    // Initial fetch of data
    this.refreshData();

    // Set interval to fetch data every 60 seconds
    this.interval = setInterval(() => {
      this.refreshData();
    }, 60 * 1000);

  }

  // Method to fetch data
  refreshData() {
    // load next5races
  this.beteasyapi.getNextToJump().subscribe(
    (data) => {this.nextRaces = data.result;
               this.noOfNextRaces = this.nextRaces.length; });
  }
}
