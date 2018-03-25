import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let urlApi = 'http://127.0.0.1:8000/api/';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {

  }

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
}
