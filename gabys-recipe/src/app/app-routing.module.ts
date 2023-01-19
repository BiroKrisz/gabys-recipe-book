import { CocktailListComponent } from './page/cocktail-list/cocktail-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CocktailDetailsComponent } from './page/cocktail-details/cocktail-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cocktails',
    component: CocktailListComponent,
  },
  {
    path: 'cocktails/:id',
    component: CocktailDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
