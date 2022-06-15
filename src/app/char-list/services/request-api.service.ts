import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Injectable()
export class RequestApiService {

  constructor(private http: HttpClient) { }


  getChars(page:number){
    const baseUrl:string = 'https://rickandmortyapi.com/api/character/?page='+page;
    return this.http.get(baseUrl);
  }
}
