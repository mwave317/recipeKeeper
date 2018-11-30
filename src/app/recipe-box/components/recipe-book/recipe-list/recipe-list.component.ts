import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe-box/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Chicken Parmasean', 'Double bread chicken breasts with egg and Italian bread crumbs. Fry in heated vegetable oil, until golden brown', './../../../../../assets/images/chicken_parm.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
