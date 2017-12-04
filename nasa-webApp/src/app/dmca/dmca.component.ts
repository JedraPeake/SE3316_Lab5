import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.css']
})
export class DmcaComponent implements OnInit {
  descPP: String;
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getdmca().subscribe(profile => {
      this.descPP = profile[0]['body'];
      console.log(profile[0]['body']);
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
