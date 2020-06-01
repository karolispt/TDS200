import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.page.html",
  styleUrls: ["./forgot.page.scss"]
})
export class ForgotPage implements OnInit {
  email: string;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async sendPassword() {
    try {
      this.fireauth.auth.sendPasswordResetEmail(this.email);
    } catch (e) {
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2500
      });
      toast.present();
      console.warn(e);
    }
    this.router.navigate(["login"]);
  }
}
