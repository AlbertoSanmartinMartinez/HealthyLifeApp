import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthenticationService } from '../../../providers/authenticate_service';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../../tabs/tabs';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = {usernmae:'', password:''};
  data: any;

  constructor(public navCtrl: NavController,
    public authenticateService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

  }

  doLogin() {
    this.showLoader();
    this.authenticateService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Accediendo...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismiss toast');
    });
    toast.present();
  }
}
