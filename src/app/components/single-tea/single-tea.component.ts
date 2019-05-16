import { Component, OnInit, Input } from '@angular/core';
import { TeaServiceService } from 'src/app/services/tea-service.service';

@Component({
  selector: 'app-single-tea',
  templateUrl: './single-tea.component.html',
  styleUrls: ['./single-tea.component.scss'],
  providers: [TeaServiceService]
})
export class SingleTeaComponent implements OnInit {

  public aSingleTea: any;
  @Input() tea: any;

  constructor(private teaService: TeaServiceService) {
    this.teaService.selectedTea.subscribe(
      (singleTea: any) => this.aSingleTea = singleTea
    );
  }

  ngOnInit() {
    console.log(this.tea);
    console.log(this.aSingleTea);
  }

}
