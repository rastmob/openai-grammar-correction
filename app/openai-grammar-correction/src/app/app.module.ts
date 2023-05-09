import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrammarCorrectionComponent } from './grammar-correction/grammer-correction.component';
import { UsertabComponent } from './usertab/usertab.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';
import {  ImageVariationComponent } from './image-variation/image-variation.component';

@NgModule({
  declarations: [
    AppComponent,
    GrammarCorrectionComponent,
    UsertabComponent,
    SpeechToTextComponent,
    ImageVariationComponent
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
