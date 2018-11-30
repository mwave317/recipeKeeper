import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeBoxComponent } from './recipe-box/recipe-box.component';
import { HeaderComponent } from './recipe-box/header/header.component';
import { ShoppingComponent } from './recipe-box/components/shopping/shopping.component';
import { ShopingListEditComponent } from './recipe-box/components/shopping/shoping-list-edit/shoping-list-edit.component';
import { RecipeBookComponent } from './recipe-box/components/recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-box/components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-box/components/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-box/components/recipe-book/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBoxComponent,
    HeaderComponent,
    ShoppingComponent,
    ShopingListEditComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
