import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import Post from "../addroom/addroominterface";
import { Observable } from "rxjs";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.page.html",
  styleUrls: ["./rooms.page.scss"]
})
export class RoomsPage implements OnInit {
  rooms$: Observable<Post[]>;
  data: any;

  constructor(private router: Router, private firestore: AngularFirestore) {}

  // Viser frem alle rom når siden er åpnet (ngOnInit)
  ngOnInit() {
    this.rooms$ = this.firestore
      .collection("Rooms")
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Post;
            data.Id = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  // oppretter en navigasjonsfunksjon slik at vi kan sende dataen til roomview (nytt vindu for mer informasjon)
  navigateRoomView(enter: Post) {
    const navigationExtras: NavigationExtras = {
      state: {
        room: enter
      }
    };
    this.router.navigate(["roomview"], navigationExtras);
  }
}
