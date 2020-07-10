import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
  name: String;
  description: String;
  vis: String;


  constructor(private authService: AuthService, private validateService: ValidateService,
    private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.vis = "true";
  }

  onCreateCollectionSubmit() {
    //console.log(this.name);
    //console.log(this.description);
    //console.log("sp " + this.vis);

    var currUser = this.authService.getUsername();
    //console.log("cu " + currUser);
    //console.log("cu " + currUser["username"]);
    var ss = currUser.split(":");
    //console.log("cu " + ss[2]);
    var ss = currUser.split(":");
    var resultUser = ss[2].slice(1, -2);
    //console.log("cu " + resultUser);

    if (this.vis == "true") {
      var isPrivate = true;
    } else {
      var isPrivate = false;
    }
    const imageCollection = {
      name: this.name,
      description: this.description,
      isPrivate: isPrivate,
      createdBy: resultUser
    }

    if (!this.validateService.validateCollection(imageCollection)) {
      this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authService.createImagecollection(imageCollection).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Your image collection has been created', { cssClass: 'alert-success', timeout: 3000 });
        //this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
        //this.router.navigate(['/register']);
      }
    });

  }

}
