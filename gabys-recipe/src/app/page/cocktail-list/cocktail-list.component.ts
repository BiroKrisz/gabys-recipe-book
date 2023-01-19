import { CocktailService } from './../../service/cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  list: any = this.cocktailService.getAll()

  ngOnInit(): void {
  }

}
