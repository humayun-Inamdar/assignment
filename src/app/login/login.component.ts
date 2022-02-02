import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FacebookLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser();
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  public signInWithGoogle(): void {
    const data = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.user);
    if (this.user?.id) {
      this.router.navigate(['contact']);
    }
  }

  loginWithFacebook(): void {
    console.log(this.user?.id);
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    if (this.user) {
      this.router.navigate(['contact']);
    }
  }
  public signOut(): void {
    this.authService.signOut();
  }
}
