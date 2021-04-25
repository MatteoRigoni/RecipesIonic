import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Hamburger',
      imageUrl: 'https://st.depositphotos.com/1102480/1589/i/600/depositphotos_15890699-stock-photo-big-hamburger.jpg',
      ingredients: ['Meat', 'Bun', 'Salad']
    },
    {
      id: '2',
      title: 'Pizza',
      imageUrl: 'https://st.depositphotos.com/2640119/3010/i/600/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg',
      ingredients: ['Tomato', 'Cheese']
    },
    {
      id: '3',
      title: 'Fries',
      imageUrl: 'https://st.depositphotos.com/2640119/3010/i/600/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg',
      ingredients: ['Potatos']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return {...this.recipes.find(r => r.id === recipeId)};
  }

  deleteRecipe(recipeId) {
    this.recipes = this.recipes.filter(f => f.id !== recipeId);
  }
}
