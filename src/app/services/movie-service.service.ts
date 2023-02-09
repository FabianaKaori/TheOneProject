import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: 'https://the-one-api.dev/v2/'
    });

    this.axiosClient.defaults.headers.common['Authorization'] = 'Bearer J9smCC4ow_JqasHdob7-'
  }

  getMovies = async () => {
    const params = new URLSearchParams();
    params.append('limit', '3');

    const { data } = await this.axiosClient.get('/movie', {params})
    return data
  }
}
