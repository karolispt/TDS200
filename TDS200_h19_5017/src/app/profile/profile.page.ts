import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import Post from "../addroom/addroominterface";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  rooms$: Observable<Post[]>;

  constructor(private fbauth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  // brkeren logger ut
  logOut() {
    this.fbauth.auth.signOut();
    this.router.navigate(["/login"]);
  }
}
