import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenDataComponent } from './open-data/open-data.component';
import { AgmComponent } from './agm/agm.component';
import { AntwerpenComponent } from './antwerpen/antwerpen.component';
import { BerchemComponent } from './berchem/berchem.component';
import { BorgerhoutComponent } from './borgerhout/borgerhout.component';
import { HobokenComponent } from './hoboken/hoboken.component';

const routes: Routes = [
  {path: 'opendata', component: OpenDataComponent},
  {path: 'agm', component: AgmComponent},
  {path: 'Antwerpen', component: AntwerpenComponent},
  {path: 'Berchem', component: BerchemComponent},
  {path: 'Borgerhout', component: BorgerhoutComponent},
  {path: 'Hoboken', component: HobokenComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OpenDataComponent, AgmComponent]