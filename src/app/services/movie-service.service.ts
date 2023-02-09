import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import axios, { AxiosInstance } from 'axios'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  baseURL = 'https://the-one-api.dev/v2'
  // 'Bearer J9smCC4ow_JqasHdob7-'
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    const params = new URLSearchParams();
    params.append('limit', '3');

    return this.httpClient.get<{ docs: any}>(`${this.baseURL}/movie`, {
      headers: {
        Authorization: 'Bearer J9smCC4ow_JqasHdob7-'
      },
     })
  }
}
