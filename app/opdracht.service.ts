import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IOpdracht } from './opdracht';
import { Observable } from 'rxjs';
import { RootObject } from './OpenData';

@Injectable({
  providedIn: 'root'
})
export class OpdrachtService {
  private _url: string = "assets/data/opdracht.json";
  private _Data_url: string = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/670/query?where=1%3D1&outFields=*&outSR=4326&f=json";
  constructor(private http:HttpClient) { }
  getData(): Observable<IOpdracht[]>{
    return this.http.get<IOpdracht[]>(this._url);
  }
  getOpenData(): Observable<RootObject>{
    return this.http.get<RootObject>(this._Data_url);
  }
  public lat: number;
  public long: number;
}
