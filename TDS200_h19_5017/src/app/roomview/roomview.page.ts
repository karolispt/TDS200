import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Post from "../addroom/addroominterface";
import { AngularFirestore } from "@angular/fire/firestore";
import { first } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-roomview",
  templateUrl: "./roomview.page.html",
  styleUrls: ["./roomview.page.scss"]
})
export class RoomviewPage {
  rooms$: Observable<Post[]>;
  data: any;
  @Input() postData: Post;
  room: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
    private fbauth: AngularFireAuth
  ) {
    // subscriber siste trykket data fra RoomsPage og viser den i ett nytt vindu
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state
          .room as Post;
      }
    });
  }

  // sletter rommet

  removeRecord(id) {
    this.router.navigate(["rooms"]);
    return this.firestore
      .collection("Rooms")
      .doc(id)
      .delete();
  }

  // oppdaterer rommet slik at den blir Unavailable og viser hvilken User booket rommet
  async updateRecord(id) {
    const userLoggedIn = await this.fbauth.authState.pipe(first()).toPromise();
    this.router.navigate(["rooms"]);
    return this.firestore
      .collection("Rooms")
      .doc(id)
      .update({
        Status: "Unavailable",
        OccupiedBy: userLoggedIn.email
      });
  }
}
