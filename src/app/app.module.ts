import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { BooksComponent } from './pages/books/books.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { CardLinkComponent } from './components/card-link/card-link.component';
import { MapHomeComponent } from './components/map-home/map-home.component';
import { MapHomeTargetComponent } from './components/map-home-target/map-home-target.component';
import { FilterMovieComponent } from './components/filter-movie/filter-movie.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    BooksComponent,
    CharactersComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    DocumentsComponent,
    CardLinkComponent,
    MapHomeComponent,
    MapHomeTargetComponent,
    FilterMovieComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
