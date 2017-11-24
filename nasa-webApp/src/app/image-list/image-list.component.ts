import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service'

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  
  images: any[];
  imagesFound: boolean = false;

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.collection.items;
    console.log(data.collection.items);
    console.log(data.collection.items[0].data[0]["description"]);
  }
  
  handleError(error){
    console.log(error);
  }

  constructor(private _imageService : ImageService ) {
  
  }
  
  searchImages( query : string ){
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      //data => console.log(data.collection),
      error => this.handleError(error),
      () => console.log("req complete")
    )
  }

  ngOnInit() {
  }

}
