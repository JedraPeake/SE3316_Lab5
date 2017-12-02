import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-image-collections',
  templateUrl: './my-image-collections.component.html',
  styleUrls: ['./my-image-collections.component.css']
})
export class MyImageCollectionsComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
    
    //imageCollection:Object;
    var currUser = this.authService.getUsername();
    var ss = currUser.split(":"); 
    var ss = currUser.split(":"); 
    var resultUser = ss[2].slice(1, -2);
    console.log("tying");
    console.log("user " + resultUser);
    this.authService.getCollections(resultUser).subscribe(data => {
      //this.imageCollection = 
      console.log("loading" + data.collections.collections);
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
