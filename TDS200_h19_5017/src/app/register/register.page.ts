import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  user = { username: "", password: "" };

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  // brukeren registrerer seg ved hjelp av firebase

  async registerUser() {
    try {
      this.authService.userRegister({
        username: this.user.username,
        password: this.user.password
      });
      this.router.navigate(["login"]);
    } catch (e) {
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2500
      });
      toast.present();
      console.warn(e);
    }
  }
}
