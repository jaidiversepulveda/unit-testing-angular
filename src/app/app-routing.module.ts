import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHeroComponent } from './06-input-output/dashboard-hero/dashboard-hero/dashboard-hero.component';
import { ComponentsBasicComponent } from './05-components-basic/components-basic/components-basic.component';


const routes: Routes = [
  { path: 'basic', component: ComponentsBasicComponent },
  { path: 'dashboard', component: DashboardHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
