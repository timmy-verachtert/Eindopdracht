import { Component, OnInit } from '@angular/core';
import { OpdrachtService } from '../opdracht.service';
import { Feature } from '../OpenData';

@Component({
  selector: 'app-open-data',
  templateUrl: './open-data.component.html',
  styleUrls: ['./open-data.component.css']
})
export class OpenDataComponent implements OnInit {
  public OpenData:Feature[];
  public selGemeente = "";
  constructor(private _opdrachtService: OpdrachtService) { }

  ngOnInit(): void {
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }

}
