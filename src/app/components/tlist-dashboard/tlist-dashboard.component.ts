import { Component, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { EventEmitter } from 'events';
import { TeaServiceService } from '../../services/tea-service.service';

@Component({
  selector: 'app-tlist-dashboard',
  templateUrl: './tlist-dashboard.component.html',
  styleUrls: ['./tlist-dashboard.component.scss']
})

export class TlistDashboardComponent {

  public selectedTea: any;
  public subscription: any;

  @Output() singleTea = new EventEmitter();

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Jazimine Blossom', cols: 2, rows: 1, img: 'assets/img/aromatic-concoction-cup-159203.jpg'},
          { id: 2, title: 'Earl Grey', cols: 2, rows: 1, img: 'assets/img/aromatic-close-cup-1417945.jpg'},
          { id: 3, title: 'Honest Garden', cols: 2, rows: 1, img: 'assets/img/beverage-chiang-mai-cup-1581484.jpg'},
          { id: 4, title: 'Prickly Spice', cols: 2, rows: 1, img: 'assets/img/aroma-background-colors-953206.jpg'}
        ];
      }

      return [
        { id: 1, title: 'Jazimine Blossom', cols: 2, rows: 1, img: 'assets/img/aromatic-concoction-cup-159203.jpg'},
        { id: 2, title: 'Earl Grey', cols: 1, rows: 1, img: 'assets/img/aromatic-close-cup-1417945.jpg'},
        { id: 3, title: 'Honest Garden', cols: 1, rows: 2, img: 'assets/img/beverage-chiang-mai-cup-1581484.jpg'},
        { id: 4, title: 'Prickly Spice', cols: 1, rows: 1, img: 'assets/img/aroma-background-colors-953206.jpg'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private teaService: TeaServiceService) {}

  public showTea(singleTea: any): void {
    this.selectedTea = singleTea;
    this.singleTea.emit(singleTea);
    console.log(singleTea);
  }
}
