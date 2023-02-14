import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  baseURL = 'https://the-one-api.dev/v2'

  constructor(private httpClient: HttpClient) {}

  getCharacter(page:number){
    const params = new HttpParams()
    .set('limit', '5')
    .set('page', page);

    return this.httpClient.get<any>(`${this.baseURL}/character`,{
      headers: {
        Authorization: 'Bearer J9smCC4ow_JqasHdob7-'
      },
      params
    })

  }
}
