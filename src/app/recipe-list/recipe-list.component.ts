import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { Recipe } from 'src/app/data/recipe';
import { Router } from '@angular/router';
import { Country } from '../data/country';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  imports: [IonicModule,CommonModule],
  standalone: true
})
export class RecipeListComponent  implements OnInit {

  recipes : Array<Recipe> | null = []
  countries : Array<Country> | null = []

  constructor(
    private recipeService : RecipeService,
    private router : Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData () {
    this.recipeService.getCountries()
      .then(data => {
        this.countries = data
      })
    this.recipeService.getRecipes()
      .then(data => {
        this.recipes = data
      })
  }

  getRecipesOfCountry (country : number) {
    let filteredRecipes : Array<Recipe> = []
    if (this.recipes) {
      filteredRecipes = this.recipes
        .filter(recipe => recipe.country_id == country)
    }
    return filteredRecipes

  }

  async handleRefresh (event : any) {
    await this.loadData()
    event.target.complete()
  }

  async edit (recipe:Recipe) {
    await this.router.navigate(['tabs/tab4/recipe', recipe.recipe_id])
  }

  delete (recipe:Recipe) {
    this.recipeService.deleteRecipe(recipe.recipe_id)
      .then(payload =>  {
        this.recipeService.getRecipes()
          .then(data => {
            this.recipes = data
          })
      })
  }

}
