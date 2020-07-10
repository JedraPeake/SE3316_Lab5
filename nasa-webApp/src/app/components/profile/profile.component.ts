import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  isAd: Boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      console.log(profile.user);
      this.user = profile.user;
      // fix this
      // this.isAd = this.user.isAdmin;
      console.log("isAdmin");
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
