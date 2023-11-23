import { Component, OnInit } from '@angular/core';
import { Recipe } from '../data/recipe';
import { Country } from '../data/country';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe.service';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  imports: [IonicModule,FormsModule,ReactiveFormsModule,CommonModule],
  standalone: true
})
export class RecipeDetailComponent  implements OnInit {

  recipe : Recipe = new Recipe()
  countries : Array<Country> = []

  public recipeForm = new FormGroup({
    id: new FormControl(0),
    recipe_name: new FormControl('', Validators.required),
    image: new FormControl(''),
    favored: new FormControl(false),
    country_id: new FormControl(0),
    user_id: new FormControl(0)
  })

  constructor(
      private recipeService : RecipeService,
      private formBuilder : FormBuilder,
      private router : Router,
      private route : ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
        const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
        this.recipeService.getRecipe(id).then(
          data => {
            this.recipe = data && data.length > 0 ? data[0] : new Recipe();
            this.recipeForm = this.formBuilder.group({
              id: new FormControl(this.recipe.recipe_id),
              recipe_name: new FormControl(this.recipe.recipe_name),
              image: new FormControl(this.recipe.image),
              favored: new FormControl(this.recipe.favored),
              country_id: new FormControl(this.recipe.country_id),
              user_id: new FormControl(this.recipe.user_id)
            });
        })
    }
    this.recipeService.getCountries().then(
      data => this.countries = data || []
    )
  }

  async back () {
    await this.router.navigate(['tabs','tab4'])
  }

  saveRecipe (formData : any) {
    this.recipe = Object.assign(formData)

    if (this.recipe.recipe_id) {
      this.recipeService.updateRecipe(this.recipe)
        .then(payload=>{
          this.back()
        })
      } else {
        this.recipeService.createRecipe(this.recipe)
          .then(payload=>{
            this.back()
          })
      }
  }


}
