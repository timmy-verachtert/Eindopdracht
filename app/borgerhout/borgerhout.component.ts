import { Component, OnInit } from '@angular/core';
import { OpdrachtService } from '../opdracht.service';
import { Feature } from '../OpenData';

@Component({
  selector: 'app-borgerhout',
  templateUrl: './borgerhout.component.html',
  styleUrls: ['./borgerhout.component.css']
})
export class BorgerhoutComponent implements OnInit {

  public OpenData:Feature[];
  constructor(private _opdrachtService: OpdrachtService) { }

  ngOnInit(): void {
    this._opdrachtService.getOpenData()
      .subscribe(data => this.OpenData = data.features);
  }

}
