import {Component, OnInit} from '@angular/core';
import {ConsumptionService} from "./services/consumption.service";
import {Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "UK",
      "value": 6200000
    }
  ];

  title = 'coffee-api-FE';
  consumption: any[] = []
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#647c8a',
      '#3f51b5',
      '#2196f3',
      '#00b862',
      '#afdf0a',
      '#a7b61a',
      '#f3e562',
      '#ff9800',
      '#ff5722',
      '#ff4514'
    ]
  }

  constructor(private consumptionService: ConsumptionService) {
  }

  ngOnInit(): void {
    this.consumptionService.getConsumptions().subscribe((x) => {
      this.consumption = (x as any[])
    })
  }

}

