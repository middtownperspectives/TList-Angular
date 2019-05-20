import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

  public title = 'My first AGM project';
  lat = 39.729300;
  lng = -104.939252;

  public steepTeaAndCoffee = [39.729300, -104.939252];
  public coffee = [39.734232, -104.987659];
  public denverTeaRoom = [39.696298, -104.987567];
  public capitolTea = [39.690236, -104.987235];

  constructor() { }

  ngOnInit() {
  }

}
