import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (!params.has('recipeId')) {
        this.router.navigate(['.recipes']);
        return;
      } else {
        const recipeId = params.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      }
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete it?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertel => {
      alertel.present();
    })

  }

}
