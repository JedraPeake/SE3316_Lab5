import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})

export class PrivacyPolicyComponent implements OnInit {
  descPP: String;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getPP().subscribe(profile => {
      this.descPP = profile[0]['body'];
      console.log(profile[0]['body']);
    },
      err => {
        console.log(err);
        return false;
      });

  }

}
