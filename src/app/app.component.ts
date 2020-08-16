import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

import { RandomGenerator } from './utils/random.class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  chart = Chart;
  focusChart: number;

  chartData: ChartDataSets[];

  ngOnInit() {
  }

  // private helpers
  changeChart(chartIndex: number) {
    this.focusChart = chartIndex;
  }
}

export enum Chart {
  RADAR
}
