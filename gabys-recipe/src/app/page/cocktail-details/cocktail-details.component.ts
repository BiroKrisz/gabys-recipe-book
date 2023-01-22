import { Cocktail } from './../../model/cocktail';
import { CocktailService } from './../../service/cocktail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  route: string = this.activatedRoute.snapshot.url[1].toString()


  drink: Cocktail = this.cocktailService.getOne(this.route)

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
  }

}
