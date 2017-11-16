import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Strawberry shortcake', 'Make this strawberry shortcake to impress!', 'https://sallysbakingaddiction.com/wp-content/uploads/2017/05/homemade-strawberry-shortcake.jpg'),
    new Recipe('Banana Bread', 'The best banana bread ever!', 'http://www.liveincostarica.com/blog/wp-content/uploads/2013/05/Buttermilk-Banana-Bread.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
