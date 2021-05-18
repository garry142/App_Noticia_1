import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }
  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=c7307602718e4ea78e9bac51d0eb4aab`)
  }
}
