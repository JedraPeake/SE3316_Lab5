import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-edit-dmca',
  templateUrl: './edit-dmca.component.html',
  styleUrls: ['./edit-dmca.component.css']
})
export class EditDmcaComponent implements OnInit {
  description: String;
  constructor(private authService:AuthService, private router: Router, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  ondmcaSubmit(){
    const pp = {
      body: this.description
    }
    
    this.authService.postdmca(pp).subscribe(data => {
      if(data.success){
        this.flashMessage.show('DMCA Updated', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong please register again', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });
  }
}
