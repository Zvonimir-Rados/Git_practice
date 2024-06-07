import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { OutletComponent } from './outlet/outlet.component';
import { NestedOutletComponent } from './form/nested-outlet/nested-outlet.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { FormService } from './shared/form.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutletComponent,
    NestedOutletComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
