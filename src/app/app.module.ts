import { ShoppingListService } from './services/shoppingList.service';
import { AppDropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Dropdown2Directive } from './shared/dropdown2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingList,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    AppDropdownDirective,
    Dropdown2Directive,
  ],
  imports: [BrowserModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
