import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { APP_BASE_HREF } from "@angular/common";
import { ProductModule } from "./products/product.module";

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo:'welcome', pathMatch:'full'},
      { path: '**', redirectTo:'welcome', pathMatch:'full'},
    ]),
    ProductModule 
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent 
  ],
  providers: [ 
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
