import { Component } from '@angular/core';

import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  movieService: MovieServiceService;
  movies:any

  constructor(){
    this.movieService = new MovieServiceService()
  }

  async ngOnInit(){
    this.movies = await this.movieService.getMovies()

    console.log(this.movies)
  }
}
