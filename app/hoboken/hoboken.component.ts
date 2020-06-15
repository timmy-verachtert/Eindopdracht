import { Component, OnInit } from '@angular/core';
import { OpdrachtService } from '../opdracht.service';
import { Feature } from '../OpenData';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-hoboken',
  templateUrl: './hoboken.component.html',
  styleUrls: ['./hoboken.component.css']
})
export class HobokenComponent implements OnInit {

  public OpenData:Feature[];
  constructor(private _opdrachtService: OpdrachtService) { }

  ngOnInit(): void {
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }
}
