import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  data: any = null;

  constructor(private http: Http) {

  }

  //metodo que devuelve las lista de posts del blog
  getPostsService() {
    console.log('llamamos al servicio');
    var url = 'http://127.0.0.1:8000/api/posts/';
    //return this.http.get(url).do((res: Response) => console.log(res.json()).map((res: Response) => res.json()).catch(error => console.log(error)));
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        resolve(this.data);
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
