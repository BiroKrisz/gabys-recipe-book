import { Cocktail } from './../model/cocktail';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  list: any = [
      {
        "id": "01",
        "name": "Mimosa",
        "ingredients": "7.5cl champagne,7.5cl orange juice",
        "method": "pour",
        "glass": "champagne glass",
        "notes": "orange wheel as garnish"
      },
      {
        "id": "02",
        "name": "Aperol Spritz",
        "ingredients": "4cl Aperol,dash of orange juice,6cl prosecco, soda",
        "method": "first ice,orange juice,aperol,prosecco,soda",
        "glass": "red wine glass",
        "notes": "orange wheel inside "
      },
      {
        "id": "03",
        "name": "Mojito/flavored",
        "ingredients": "3cl white rum,2cl sugar syrup/2cl flavor,4cl lime juice,handful of mint,soda",
        "method": "first ice,mint,lime&sugar syrup,fill with soda",
        "glass": "collins glass",
        "notes": "mint&lime/fruit as garnish,lime wheel inside"
      },
      {
        "id": "04",
        "name": "Old Fashioned",
        "ingredients": "4 dash Angostura,2ts brown sugar,6 cl Makers Mars",
        "method": "first mix sugar&bitter,ice,whiskey,stir",
        "glass": "old fashioned glass",
        "notes": "don't melt sugar,orange peel as garnish"
      },
      {
        "id": "05",
        "name": "Daiquiri",
        "ingredients": "6cl white rum,3cl lime juice,2cl sugar syrup(change syrup if flavored)",
        "method": "shake&strain",
        "glass": "martini glass",
        "notes": "1/4 lime wheel as garnish"
      },
      {
        "id": "06",
        "name": "Moscow/London/Tel-Avivi/Jamaican Mule",
        "ingredients": "4cl vodka/gin/tubi/black rum,2cl lime juice,ginger beer,cucumber slice",
        "method": "cucumber,ice,lime,alcohol,fill with ginger beer",
        "glass": "copper mug",
        "notes": "lime wheel&mint as garnish"
      },
      {
        "id": "07",
        "name": "Cosmopolitan",
        "ingredients": "5cl vodka,2cl cointreau,2cl lime juice,5cl cranberry juice,dash of strawberry syrup",
        "method": "shake&strain",
        "glass": "martini glass",
        "notes": "1/4 lime wheel as garnish"
      },
      {
        "id": "08",
        "name": "Martini ",
        "ingredients": "6cl vodka/gin,3cl extra dry martini vermouth,2 dash orange bitter",
        "method": "ice first then others,stir&strain",
        "glass": "martini glass",
        "notes": "lime/orange peel as garnish"
      },
      {
        "id": "09",
        "name": "Margarita/flavored",
        "ingredients": "6cl tequila,2cl cointreau,4cl lime juice and 2cl simple syrup/flavor",
        "method": "shake&strain",
        "glass": "margarita glass",
        "notes": "salt/sugar rim and garnish with lime wheel"
      },
      {
        "id": "10",
        "name": "Espresso Martini",
        "ingredients": "5cl vodka,3cl Kahlua,espresso shot,dash of vanilla ",
        "method": "shake&strain,first dry shake then with ice",
        "glass": "martini glass",
        "notes": "coffee beans as garnish"
      },
      {
        "id": "11",
        "name": "Black/white Russian",
        "ingredients": "6cl vodka,3cl Kahlua,(cream if white russian)",
        "method": "first ice,vodka,Kahlua, (cream if white)",
        "glass": "old fashioned glass",
        "notes": "kakao as garnish if white,drink is layered"
      },
      {
        "id": "12",
        "name": "Manhattan",
        "ingredients": "6cl Maker's Mark,3cl Martini Rosso, 4 dash Angostura",
        "method": "stir&strain ",
        "glass": "martini glass",
        "notes": "cherry as garnish"
      },
      {
        "id": "13",
        "name": "Negroni",
        "ingredients": "3cl gin,3cl Martini Rosso,3cl Campari",
        "method": "first ice,gin,vermouth,campari,stir",
        "glass": "old fashioned glass",
        "notes": "orange peel as garnish"
      },
      {
        "id": "14",
        "name": "Mango Mai Tai",
        "ingredients": "4cl spiced/dark rum,2cl cointreau,2cl almond syrup,mango juice,2 dashes angostura",
        "method": "first shake then pour and fill with mango juice",
        "glass": "short cocktail glass",
        "notes": "pineapple/mango slice as garnish"
      },
      {
        "id": "15",
        "name": "Long Island Ice Tea",
        "ingredients": "2cl vodka,2cl gin,2cl rum,2cl tequila,2cl cointreau,2 cl lemon juice, Coca-Cola",
        "method": "first ice,cola,fill with shaked&strained liquid",
        "glass": "highball glass",
        "notes": "lemon slice as garnish,drink is layered"
      },
      {
        "id": "16",
        "name": "Caipirinha",
        "ingredients": "1 lime,2 spoon brown sugar,6cl Cachaca",
        "method": "crush lime&sugar,ice,cachaca",
        "glass": "old fashioned glass",
        "notes": "lime wheel as garnish"
      },
      {
        "id": "17",
        "name": "Pisco/Whiskey Sour",
        "ingredients": "4cl pisco/Maker's Mark,2cl simple syrup,1cl lime juice,1cl lemon juice,egg white",
        "method": "shake&strain,first dry shake then with ice",
        "glass": "martini/old fshioned",
        "notes": "dashes of Angostura as garnish "
      },
      {
        "id": "18",
        "name": "Duna Sunset",
        "ingredients": "4cl malibu,2cl white rum,1dl orange juice,dash of cranberry syrup",
        "method": "shake&pour,finish with dash of cranberry",
        "glass": "collins glass",
        "notes": "orange wheel as garnish,with sunset effect"
      },
      {
        "id": "19",
        "name": "Vodka kick/Grapefruit vodka kick",
        "ingredients": "4cl vodka,2cl lime juice,2cl simple syrup/2cl grapefruit syrup,bitter,ginger beer",
        "method": "shake&pour,fill with ginger beer",
        "glass": "short cocktail,collins",
        "notes": "lime wheel as garnish"
      },
      {
        "id": "20",
        "name": "Gaby's Ginger Mint",
        "ingredients": "4cl mango vodka,2cl passionfruit syrup,2cl lime juice,basil leaf,ginger beer",
        "method": "shake&pour everything,fill with ginger beer",
        "glass": "short cocktail glass",
        "notes": "basil as garnish "
      },
      {
        "id": "21",
        "name": "Gin Breeze",
        "ingredients": "4cl gin,4cl grapefruit syrup,2cl lime,pink tonic",
        "method": "shake&pour,fill with tonic",
        "glass": "short coctail glass",
        "notes": "rosemary as garnish"
      },
      {
        "id": "22",
        "name": "Tubi Twist",
        "ingredients": "4cl tubi,2cl lemon juice,1dl mango juice,3 dash of Angostura,soda",
        "method": "first ice,tubi,bitter,lemon&mango juice,soda",
        "glass": "short cocktail glass",
        "notes": "mint as garnish"
      },
      {
        "id": "23",
        "name": "Aperol Sunset",
        "ingredients": "4cl gin,4cl aperol,4cl lemonjuice,2cl simple syrup,2cl egg white",
        "method": "shake&pour everything ",
        "glass": "short cocktail glass",
        "notes": "orange wheel as garnish"
      },
      {
        "id": "24",
        "name": "Gin Fizz",
        "ingredients": "4cl bla.current gin,2cl lime juice,4cl cranberry syrup,soda",
        "method": "shake&strain,fill with soda",
        "glass": "collins glass",
        "notes": "blueberries as garnish"
      },
      {
        "id": "25",
        "name": "Hot Toddy",
        "ingredients": "4cl jameson,2ts honey,hot water ",
        "method": "first honey,jameson,hot water,melt the honey",
        "glass": "tea cup",
        "notes": "lemon wheel,cinnamon stick"
      },
      {
        "id": "26",
        "name": "Fireplace delight",
        "ingredients": "4cl fireball,hot chocolate,whipped cream",
        "method": "mix and cream on top",
        "glass": "latte glass"
      },
      {
        "id": "27",
        "name": "Apple Pie",
        "ingredients": "4cl fireball,apple cider",
        "method": "little ice,firabll, fill with cider",
        "glass": "old fashioned glass",
        "notes": "apple wheel as garnish"
      },
      {
        "id": "28",
        "name": "Ginger Snap",
        "ingredients": "4cl spiced rum,2cl cointreau,angostura,ginger beer",
        "method": "stir everything on ice,fill with ginger beer",
        "glass": "short cocktail glass",
        "notes": "cinnamon stick as garnish"
      },
      {
        "id": "29",
        "name": "Apple Crumble",
        "ingredients": "4cl Jack Daniels(Apple),1cl lemon and apple juice,kinley ginger ale",
        "method": "stir everything on ice,fill with kinley ginger",
        "glass": "old fashioned glass",
        "notes": "apple wheel as garnish"
      },
      {
        "id": "30",
        "name": "Gaby's Punch",
        "ingredients": "4cl dark rum,4cl coco milk,4cl pineapple juice,2cl elderflower syrup",
        "method": "shake&pour on ice",
        "glass": "short coctail glass",
        "notes": "mint as garnish"
      },
      {
        "id": "31",
        "name": "Pussy Punch",
        "ingredients": "1cl tubi,1cl lime juice,1cl cointreau,1cl grapefruit syrup",
        "method": "shake&strain",
        "glass": "shot"
      }
    ]

  getAll(): Cocktail[] {
      this.list.sort((a: Cocktail, b: Cocktail) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      return this.list
  }
}
