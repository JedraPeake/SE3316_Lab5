import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : String;
  password : String;

  constructor() { }

  ngOnInit() {
  }
  
  onRegisterSubmit(){
    console.log("onRegisterSubmit");
    
  }

}
