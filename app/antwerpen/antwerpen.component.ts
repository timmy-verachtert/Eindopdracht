import { Component, OnInit } from '@angular/core';
import { OpdrachtService } from '../opdracht.service';
import { Feature } from '../OpenData';
import { AgmComponent } from '../agm/agm.component';

@Component({
  selector: 'app-antwerpen',
  templateUrl: './antwerpen.component.html',
  styleUrls: ['./antwerpen.component.css']
})
export class AntwerpenComponent implements OnInit {

  public OpenData:Feature[];
  constructor(private _opdrachtService: OpdrachtService) { }

  ngOnInit(): void {
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }
}
