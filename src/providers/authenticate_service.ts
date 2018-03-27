import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let urlApi = 'http://127.0.0.1:8000/api/';

@Injectable()
export class AuthenticationService {

  public user: any = null;

  constructor(public http: Http) {

  }

  //metodo que inicia la sesion un usuario
  login(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(urlApi+'login', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }

  //metodo que registra a un usuario
  register(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(urlApi+'user/register/', JSON.stringify(data), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }

  //metodo que termina la sesion de un usuario
  logout() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Auth-Token', localStorage.getItem('token'));
      this.http.post(urlApi+'logout', {}, {headers: headers})
      .subscribe(res => {
        localStorage.clear();
      }, (err) => {
        reject(err);
      });
    });
  }

  //metodo que devuelve un usuario
  getUser(data) {
    return new Promise(resolve => {
      this.http.get(urlApi+'users/'+data)
      .map(res => res.json())
      .subscribe(data => {
        resolve(this.user);
      });
    });
  }
}
