import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  barChart, lineChartSeries } from '../services/combo-chart-data';
import { AppServices } from '../services/data';

  @Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    encapsulation: ViewEncapsulation.None
  })
  export class ItemsComponent implements OnInit {
  
    view: any[];
    width: number = 500;
    height: number = 300;
    fitContainer: boolean = false;
  
    data: any[] =[];
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle = 'Job Details';
    showXAxisLabel = true;
    tooltipDisabled = false;
    xAxisLabel = 'Type of Maintenance';
    showYAxisLabel = true;
    yAxisLabel = 'Number of Jobs';
    showGridLines = true;

    showRightYAxisLabel: boolean = true;
    yAxisLabelRight: string = 'Utilization';


    // Combo Chart
    barChart: any[] = barChart;
    lineChartSeries: any[] = lineChartSeries;
    lineChartScheme = {
      name: 'coolthree',
      selectable: true,
      group: 'Ordinal',
      domain: [
        'brown', 'red', 'blue'
      ]
    };
  
    comboBarScheme = {
      name: 'singleLightBlue',
      selectable: true,
      group: 'Ordinal',
      domain: [
        'gold'
      ]
    };
    constructor(private itemService: AppServices) {
    }
  
    ngOnInit() {
      this.itemService.getJSON()
      .subscribe(resItemData => this.data = resItemData);

      if (!this.fitContainer) {
        this.applyDimensions();
      }
    }

    applyDimensions() {
      this.view = [this.width, this.height];
    }
    toggleFitContainer(event) {
      this.fitContainer = event;

      if (this.fitContainer) {
        this.view = undefined;
      } else {
        this.applyDimensions();
      }
    }

    /*
    **
    Combo Chart
    **
    [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
    exposes the left and right min and max axis values for custom scaling, it is probably best to
    scale one axis in relation to the other axis but for flexibility to scale either the left or
    right axis bowth were exposed.
    **
    */
    yLeftAxisScale(min, max) {
      return {min: `${min}`, max: `${max}`};
    }
    yRightAxisScale(min, max) {
      return {min: `${min}`, max: `${max}`};
    }
    yLeftTickFormat(data) {
      return `${data.toLocaleString()}`;
    }
    yRightTickFormat(data) {
      return `$${data}`;
    }
    /*
    **
    End of Combo Chart
    **
    */

    onSelect(event) {
      console.log(event);
      console.log("LOOK HERE" + this.data);
    }
  
  }