import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movies:any
  totalPages?: number

  constructor(private movieService: MovieServiceService){ }

  async ngOnInit(){
   this.movieService.getMovies().subscribe(response => {
    this.movies = response.docs
    this.totalPages = response.pages
   })
  }
}
