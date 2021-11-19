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
  dateInfo: any[] = []


  view: [number, number] = [350 , 250];
  viewBig: [number, number] = [350 , 450];

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
    domain: ['#A40CC9', '#BB86FC', '#0C98C9', '#7aa3e5', '#a8385d', '#aae3f5']
  }

  constructor(private consumptionService: ConsumptionService) {
  }

  ngOnInit(): void {
    if (document.body.offsetWidth > 1500) {
      this.viewBig = [700, 450]
    }
    console.log(document.body.offsetWidth)

    this.consumptionService.getNumberComparison().subscribe((x) => {
      this.numbersComparison = (x as any[])
    })

    this.consumptionService.getDateInfo().subscribe((x) => {
      this.dateInfo = (x as any[])
    })
  }

  onResize($event: any) {
    if (document.body.offsetWidth > 1500) {
      this.viewBig = [700, 450];
    } else {
      this.viewBig = [350 , 450];
    }
  }

}

