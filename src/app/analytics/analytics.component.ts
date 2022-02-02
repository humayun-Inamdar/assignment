import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    series1.strokeWidth = 3;
    series1.tensionX = 0.8;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 23),
      "value": 125
    }, {
      "date": new Date(2018, 3, 26),
      "value": 77
    }, {
      "date": new Date(2018, 3, 28),
      "value": 113
    }];

  }

}
