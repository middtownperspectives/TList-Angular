import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeaServiceService {

  public sharingData: any;
  public selectedTea = new EventEmitter<any>();

  logToConsole(event: any) {
    console.log(`from service ${event}`);
  }

  //   public showTea(singleTea: any): void {
  //   this.selectedTea = singleTea;
  //   this.singleTea.emit(singleTea);
  //   console.log(singleTea);
  //   this.teaService.logToConsole(singleTea);
  // }
}
