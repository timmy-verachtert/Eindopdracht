import { Component, OnInit, Input, Attribute } from '@angular/core';
import { OpenDataComponent } from '../open-data/open-data.component';
import { Feature } from '../OpenData';
import { OpdrachtService } from '../opdracht.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  constructor(private _opdrachtService: OpdrachtService) { }
  @Input() public lat:number;
  @Input() public long:number;

  ngOnInit(): void {
    this.setCurrentLocation();
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }

  public OpenData:Feature[];
  
  private setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
