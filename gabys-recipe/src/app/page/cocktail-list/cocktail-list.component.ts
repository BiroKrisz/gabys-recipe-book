
import { Component, OnInit } from '@angular/core';

import { Cocktail } from './../../model/cocktail';
import { CocktailService } from './../../service/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  list: Cocktail[] = this.cocktailService.getAll()

  ngOnInit(): void {
  }

}
