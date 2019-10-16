import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OverviewComponent } from './overview/overview.component';



const routes: Routes = [

  { path:  '', redirectTo:  'form', pathMatch:  'full' },
  { path:  'form', component:  FormComponent},
  { path:  'overview', component:  OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
