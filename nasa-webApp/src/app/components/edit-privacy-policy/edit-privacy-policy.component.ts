import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-edit-privacy-policy',
  templateUrl: './edit-privacy-policy.component.html',
  styleUrls: ['./edit-privacy-policy.component.css']
})
export class EditPrivacyPolicyComponent implements OnInit {
  descPP: String; description: String;
  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getPP().subscribe(profile => {
      this.descPP = profile.pp[0]['body'];
    },
      err => {
        console.log(err);
        return false;
      });
  }
  onSubmit() {
    const pp = {
      body: this.description
    }

    this.authService.updatePP(pp).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Privacy Policy Updated', { cssClass: 'alert-success', timeout: 3000 });
        //this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
        //this.router.navigate(['/register']);
      }
    });
  }
}
