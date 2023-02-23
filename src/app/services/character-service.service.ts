import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  baseURL = 'https://the-one-api.dev/v2'

  constructor(private httpClient: HttpClient) {}

  getCharacters(page:number, name?:string){
    let params = new HttpParams()
    .set('limit', '9')
    .set('page', page);

    console.log(name)


    if(name !== undefined) {
      params = params.append('name', `/${name}/i`)
    }

    return this.httpClient.get<any>(`${this.baseURL}/character`,{
      headers: {
        Authorization: 'Bearer J9smCC4ow_JqasHdob7-'
      },
      params
    })

  }
}
