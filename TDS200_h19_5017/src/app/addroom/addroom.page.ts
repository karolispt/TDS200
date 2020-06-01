import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import Post from "./addroominterface";

@Component({
  selector: "app-addroom",
  templateUrl: "./addroom.page.html",
  styleUrls: ["./addroom.page.scss"]
})

//AddroomPage klassen som legger til ønsket rom i databasen
export class AddroomPage implements OnInit {
  rooms: any;
  roomNumber: number;
  roomName: string;
  roomDescription: string;
  roomAvailable: boolean;
  roomUser: string;
  //private fbauth: AngularFireAuth;
  //private firestore: AngularFirestore;

  constructor(
    private router: Router,
    private fbauth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // async funksjonen som leser all data fra databasen
  ngOnInit() {}

  // den tar imot inputs og e-post adressen til brukeren som legger til et møterom og sender
  // videre inputs til FireBase, som blir lagt til i Firebase databasen

  async createRecord() {
    const postData = this.firestore.collection<Post>("Rooms");
    const userLoggedIn = await this.fbauth.authState.pipe(first()).toPromise();

    await postData.add({
      Name: this.roomName,
      Number: this.roomNumber,
      Description: this.roomDescription,
      User: userLoggedIn.email,
      Status: "Available",
      OccupiedBy: "N/A"
    });
    this.router.navigate(["rooms"]);
  }
}
