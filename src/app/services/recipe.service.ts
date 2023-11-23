import { Injectable } from "@angular/core";

import { LoadingController } from "@ionic/angular";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Recipe } from "src/app/data/recipe"; // Make sure to define the Recipe interface
import { RecipeType } from "src/app/data/recipe_type"; // Make sure to define the RecipeType interface
import { RecipeHasRecipeType } from "src/app/data/recipe_has_recipe_type"; // Make sure to define the RecipeHasRecipeType interface
import { User } from "src/app/data/user"; // Make sure to define the User interface
import { Country } from "src/app/data/country"; // Make sure to define the Country interface
import { environment } from "src/environments/environment";

export const RECIPES_TABLE = 'recipies';
export const COUNTRIES_TABLE = 'countries';
export const RECIPE_TYPES_TABLE = 'recipe_types';
export const USERS_TABLE = 'users';
export const RECIPES_HAS_RECIPE_TYPES_TABLE = 'recipes_has_recipe_types';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private supabase: SupabaseClient

  constructor (private loadingCtrl: LoadingController) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  createLoader() {
    return this.loadingCtrl.create()
  }

  async getCountries () {
    const { data, error } = await this.supabase
      .from(COUNTRIES_TABLE)
      .select('*')
      .order('country_name')

    return data || []
  }

  // Add more methods to interact with the other tables
  async getRecipes () {
    const { data, error } = await this.supabase
      .from(RECIPES_TABLE)
      .select('*')
      .order('recipe_name')
    return data
  }

  async getRecipeTypes () {
    const { data, error } = await this.supabase
      .from(RECIPE_TYPES_TABLE)
      .select('*')
      .order('recipe_type_name')
    return data
  }

  async getRecipesHasRecipeTypes () {
    const { data, error } = await this.supabase
      .from(RECIPES_HAS_RECIPE_TYPES_TABLE)
      .select('*')
      .order('recipe_id')
    return data
  }

  async getRecipe (id: number) {
    const { data, error } = await this.supabase
      .from(RECIPES_TABLE)
      .select('*')
      .eq('id', id)
    return data
  }

  async getRecipeType (id: number) {
    const { data, error } = await this.supabase
      .from(RECIPE_TYPES_TABLE)
      .select('*')
      .eq('id', id)
    return data
  }

  async getRecipesHasRecipeType (id: number) {
    const { data, error } = await this.supabase
      .from(RECIPES_HAS_RECIPE_TYPES_TABLE)
      .select('*')
      .eq('id', id)
    return data
  }

  async getUser (id: number) {
    const { data, error } = await this.supabase
      .from(USERS_TABLE)
      .select('*')
      .eq('id', id)
    return data
  }

  async getCountry (id: number) {
    const { data, error } = await this.supabase
      .from(COUNTRIES_TABLE)
      .select('*')
      .eq('id', id)
    return data
  }

  async createRecipe (recipe: Recipe) {
    const { data, error } = await this.supabase
      .from(RECIPES_TABLE)
      .insert([recipe])
    return data
  }

  async createRecipeType (recipeType: RecipeType) {
    const { data, error } = await this.supabase
      .from(RECIPE_TYPES_TABLE)
      .insert([recipeType])
    return data
  }

  async createUsers (user: User) {
    const { data, error } = await this.supabase
      .from(USERS_TABLE)
      .insert([user])
    return data
  }

  async updateRecipe (recipe: Recipe) {
    const { data, error } = await this.supabase
      .from(RECIPES_TABLE)
      .update(recipe)
      .match({ id: recipe.recipe_id })
    return data
  }

  async updateRecipeType (recipeType: RecipeType) {
    const { data, error } = await this.supabase
      .from(RECIPE_TYPES_TABLE)
      .update(recipeType)
      .match({ id: recipeType.recipe_type_id })
    return data
  }

  async updateUsers (user: User) {
    const { data, error } = await this.supabase
      .from(USERS_TABLE)
      .update(user)
      .match({ id: user.user_id })
    return data
  }

  async deleteRecipe (id: number) {
    const { data, error } = await this.supabase
      .from(RECIPES_TABLE)
      .delete()
      .match({ id })
    return data
  }

  async deleteRecipeType (id: number) {
    const { data, error } = await this.supabase
      .from(RECIPE_TYPES_TABLE)
      .delete()
      .match({ id })
    return data
  }

  async deleteUsers (id: number) {
    const { data, error } = await this.supabase
      .from(USERS_TABLE)
      .delete()
      .match({ id })
    return data
  }
}