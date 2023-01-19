import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './page/home/home.component';
import { CocktailListComponent } from './page/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './page/cocktail-details/cocktail-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
