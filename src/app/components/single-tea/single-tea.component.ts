import { Component, OnInit, Input } from '@angular/core';
import { TlistDashboardComponent } from '../tlist-dashboard/tlist-dashboard.component';

@Component({
  selector: 'app-single-tea',
  templateUrl: './single-tea.component.html',
  styleUrls: ['./single-tea.component.scss']
})
export class SingleTeaComponent implements OnInit {

  public aSingleTea: any;
  @Input() tea: any;

  constructor() { }

  ngOnInit() {
    console.log(this.tea);
    console.log(this.aSingleTea);
  }

}
