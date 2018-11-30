import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken Breasts', '2lbs.'),
    new Ingredient('Tomato Sauce', '1.5 cups'),
    new Ingredient('Mozzeralla Cheese', '4 thick cut slices'),
    new Ingredient('Vegetable Oil', '1/2 cup'),
    new Ingredient('Italian Bread Crumbs', '2 cups'),
    new Ingredient('Large Eggs', '6'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
