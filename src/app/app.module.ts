import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ItemsComponent } from './items/items.component';
import { ComboChartComponent } from './items/combo-chart/combo-chart.component';
import { ComboSeriesVerticalComponent } from './items/combo-chart/combo-series-vertical.component';

import { AppServices } from './services/data';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

