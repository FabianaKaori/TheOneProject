import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./pages/books/books.component";
import { CharactersComponent } from "./pages/characters/characters.component";
import { DocumentsComponent } from "./pages/documents/documents.component";
import { HomeComponent } from "./pages/home/home.component";
import { MoviesComponent } from "./pages/movies/movies.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'filmes', component: MoviesComponent },
    { path: 'livros', component: BooksComponent },
    { path: 'personagens', component: CharactersComponent },
    { path: 'links', component: DocumentsComponent }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }