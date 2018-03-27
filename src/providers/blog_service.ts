import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let urlApi = 'http://127.0.0.1:8000/api/';

@Injectable()
export class BlogService {

  public posts: any = null;
  public post:any = null;
  public comments: any = null;
  //public category: any = null;
  //public tag: any = null;
  //public user: any = null;

  constructor(
    private http: Http) {
  }

  //metodo que devuelve las lista de posts del blog
  getPosts() {
    return new Promise(resolve => {
      this.http.get(urlApi+'posts/', {
        params: {
          status: 1
        }
      })
      .map(res => res.json())
      .subscribe(data => {
        this.posts = data.results;
        resolve(this.posts);
      });
    });
  }

  // buscar posts por autor
  getPostsByAuthor(author_id:string) {

  }

  // buscar posts por categoria
  getPostsByCategory(category_id:string) {

  }

  // buscar posts por etiqueta
  getPostsByTag(tag_id:string) {

  }

  //metodo que devuelve el detalle de un post
  getPost(post_id:string) {
    return new Promise(resolve => {
      this.http.get(urlApi + 'posts/' + post_id)
      .map(res => res.json())
      .subscribe(data => {
        this.post = data;
        resolve(this.post);
      });
    });
  }

  getComments(post_id:string) {
    return new Promise(resolve => {
      this.http.get(urlApi + 'comments/', {
        params: {
          status: 1,
          post_id: post_id,
        }
      })
      .map(res => res.json())
      .subscribe(data => {
        this.comments = data.results;
        resolve(this.comments);
      });
    });
  }

  doComment() {
    return new Promise(resolve => {
      this.http.post(urlApi + 'comments/', {
        params: {
          post_id: 
        }
      })
    })
  }
}
