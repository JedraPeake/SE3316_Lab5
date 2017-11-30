import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : String;
  password : String;

  constructor(private validateService : ValidateService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  
  onRegisterSubmit(){
    console.log("onRegisterSubmit");
    console.log(this.username);
    
    const user ={
      username: this.username,
      password: this.password
    }
    
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("please fill in all fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.username)){
      this.flashMessage.show("please use a valid email", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
