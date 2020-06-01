import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  user = { username: "", password: "" };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  // Log in side

  async logIn() {
    try {
      this.authService.userLogIn({
        username: this.user.username,
        password: this.user.password
      });
      this.router.navigate(["home"]);
    } catch (e) {
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2500
      });
      toast.present();
    }
  }

  registerUser() {
    this.router.navigate(["register"]);
  }

  forgotPassword() {
    this.router.navigate(["forgot"]);
  }
}
