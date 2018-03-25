import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let urlApi = 'http://127.0.0.1:8000/api/posts/';

@Injectable()
export class BlogService {

  public posts: any = null;

  constructor(private http: Http) {

  }

  //metodo que devuelve las lista de posts del blog
  getPosts() {
    return new Promise(resolve => {
      this.http.get(urlApi)
      .map(res => res.json())
      .subscribe(data => {
        this.posts = data.results;
        resolve(this.posts);
      });
    });
  }

  //metodo que devuelve las informacion del post
  getPost() {

  }

  // buscar por autor
  // buscar por categoria
  // buscar por etiqueta

}
