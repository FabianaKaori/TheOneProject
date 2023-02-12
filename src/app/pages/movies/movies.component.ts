import { NgIf } from '@angular/common';
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

  ngOnInit(){
    this.getMovies(1)
  }

  getMovies = (page: number) =>{
    this.movieService.getMovies(page).subscribe(response => {
      this.movies = response.docs
      this.totalPages = response.pages
     })
  }

  handleCurrentPage = (page: number) =>{
    this.getMovies(page)
  }

}
