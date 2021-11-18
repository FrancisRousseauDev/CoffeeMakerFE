import {Component, OnInit} from '@angular/core';
import {ConsumptionService} from "./services/consumption.service";
import {Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coffee-api-FE';

  consumption: any[] = []
  numbersComparison: any[] = []


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
    domain: ['#5AA454', '#BB86FC', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  }

  constructor(private consumptionService: ConsumptionService) {
  }

  ngOnInit(): void {
    this.consumptionService.getNumberComparison().subscribe((x) => {
      this.numbersComparison = (x as any[])
    })
  }

}

