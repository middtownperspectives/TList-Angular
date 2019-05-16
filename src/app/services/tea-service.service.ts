import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeaServiceService {

  public sharingData: any;

  public Teas: {} = [
    { id: 1,
      title: 'Jazimine Blossom',
      description: 'Contact 001 des',
      img: '../../../assets/img/aromatic-concoction-cup-159203.jpg',
      directions: 'directions',
      creatorFirstName: 'first name',
      creatorLastName: 'last name'
    },
    { id: 2,
      title: 'Earl Grey',
      description: 'Contact 002 des',
      img: '../../../assets/img/aromatic-close-cup-1417945.jpg',
      directions: 'directions',
      creatorFirstName: 'first name',
      creatorLastName: 'last name'
    },
    { id: 3,
      title: 'Honest Garden',
      description: 'Contact 003 des',
      img: '../../../assets/img/beverage-chiang-mai-cup-1581484.jpg',
      directions: 'directions',
      creatorFirstName: 'first name',
      creatorLastName: 'last name'
    },
    { id: 4,
      title: 'Prickly Spice',
      description: 'Contact 004 des',
      img: '../../../assets/img/aroma-background-colors-953206.jpg',
      directions: 'directions',
      creatorFirstName: 'first name',
      creatorLastName: 'last name'
    }
  ];

  // Observable string sources
  public selectedTea = new Subject<any>();

  // Observable string streams
  public teaSelected$ = this.selectedTea.asObservable();

  // Service message commands
  public thisTeaSelected(tea: any) {
    this.selectedTea.next(tea);
  }

}
