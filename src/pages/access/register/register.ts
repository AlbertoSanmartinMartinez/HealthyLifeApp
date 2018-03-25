import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../../providers/authenticate_service';

@IonicPage({
  name: 'register'
})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public loading: any;
  public registerData = {username:'', email:'', password1:'', password2:''};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authenticateService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

  }

  doRegister() {
    this.showLoader();
    this.authenticateService.register(this.registerData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Registrando...'
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
