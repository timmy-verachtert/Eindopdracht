import { Component, OnInit } from '@angular/core';
import { OpdrachtService } from '../opdracht.service';
import { Feature } from '../OpenData';

@Component({
  selector: 'app-berchem',
  templateUrl: './berchem.component.html',
  styleUrls: ['./berchem.component.css']
})
export class BerchemComponent implements OnInit {

  public OpenData:Feature[];
  constructor(private _opdrachtService: OpdrachtService) { }

  ngOnInit(): void {
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }

}
