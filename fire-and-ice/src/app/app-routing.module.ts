import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { BooksComponent } from './components/books/books/books.component';
import { CharactersComponent } from './components/books/characters/characters.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent},
  { path: 'books', component: BooksComponent},
  { path: 'characters/:bookId', component: CharactersComponent},
  { path: '', redirectTo: 'splash', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
