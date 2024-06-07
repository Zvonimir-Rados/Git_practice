import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from './form/form.component';
import { OutletComponent } from './outlet/outlet.component';
import { NestedOutletComponent } from './form/nested-outlet/nested-outlet.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: 'form',
    component: FormComponent,
    children: [
      { path: 'nested-outlet', component: NestedOutletComponent }
    ]
  },
  { path: 'outlet', component: OutletComponent },
  { path: '**', redirectTo: '/form' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule {

}