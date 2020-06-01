import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  text =
    "Welcome to the Meeting room booking and adding prototype. This app is made due to requirements of TDS200 Exam at Høyskolen Kristiania.";

  constructor() {}
}
