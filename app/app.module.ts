import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OpdrachtService } from './opdracht.service';
import { AgmCoreModule } from '@agm/core';
import { MenuComponent } from './menu/menu.component';

import { AntwerpenComponent } from './antwerpen/antwerpen.component';
import { BerchemComponent } from './berchem/berchem.component';
import { BorgerhoutComponent } from './borgerhout/borgerhout.component';
import { HobokenComponent } from './hoboken/hoboken.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuComponent,
    AntwerpenComponent,
    BerchemComponent,
    BorgerhoutComponent,
    HobokenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBv8PtkN9NcVtneybTbBSVEmAysRANYcaQ',
      libraries: ['places']
    })
  ],
  providers: [OpdrachtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
