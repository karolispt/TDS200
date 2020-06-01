import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fireauth: AngularFireAuth
  ) { }

  async userLogIn({ username, password }) {
    return await this.fireauth.auth.signInWithEmailAndPassword(username, password);
  }

  async userRegister({ username, password }) {
    return await this.fireauth.auth.createUserWithEmailAndPassword(username, password);
  }

  async userLogout() { }
}
