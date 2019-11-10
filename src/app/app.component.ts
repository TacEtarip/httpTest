import { Component, OnInit } from '@angular/core';
import { TestHttpService, Post } from './test-http.service';
import { Observable } from 'rxjs';
import { PruebaT } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listPost$: Observable<Post[]>;
  // listPost: Post[];

  /*objetoPost: Post = {
    id: null,
    userId: 10,
    title: 'hola',
    body: 'hola tu'
  };*/

  constructor(private servicioHttp: TestHttpService) { }



  ngOnInit(): void {
    this.listPost$ = this.servicioHttp.getAllPost();
    let x = new PruebaT();
    x.hola = 1;
    /* this.servicioHttp.push_Post(this.objetoPost)
       .subscribe();*/
    // console.log(this.listPost$);
    /*
        this.servicioHttp.getAllPost()
          .subscribe((listaPost: Post[]) => {
            console.log(listaPost);
            this.listPost = listaPost;
            console.log(this.listPost);
            console.log(typeof (this.listPost));
          });*/

  }

}
