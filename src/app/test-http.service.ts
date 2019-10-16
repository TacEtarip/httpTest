import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {

  constructor(private http: HttpClient) { }

  urlBasePost = 'https://jsonplaceholder.typicode.com/posts';

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlBasePost);
  }

  push_Post(newPost: Post) {
    return this.http.post(this.urlBasePost, newPost);
  }



}

interface ListaPostRespuesta {
  listaPost: Post[];
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


