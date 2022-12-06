import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrammarCorrectionComponent } from './grammar-correction/grammer-correction.component';
import { UsertabComponent } from './usertab/usertab.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    GrammarCorrectionComponent,
    UsertabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
