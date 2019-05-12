import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tlist-dashboard',
  templateUrl: './tlist-dashboard.component.html',
  styleUrls: ['./tlist-dashboard.component.scss']
})
export class TlistDashboardComponent {

  @Input() public colImg = '';
  @Input() public title = '';


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.title, cols: 1, rows: 1, img: this.colImg},
          { title: this.title, cols: 1, rows: 1, img: this.colImg},
          { title: this.title, cols: 1, rows: 1, img: this.colImg},
          { title: this.title, cols: 1, rows: 1, img: this.colImg}
        ];
      }

      return [
        { title: this.title, cols: 2, rows: 1, img: this.colImg },
        { title: this.title, cols: 1, rows: 1, img: this.colImg },
        { title: this.title, cols: 1, rows: 2, img: this.colImg },
        { title: this.title, cols: 1, rows: 1, img: this.colImg }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
