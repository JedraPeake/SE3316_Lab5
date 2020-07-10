import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;

  handleSuccess(data) {

    //console.log("empty test" + data.collection.items)
    try {
      console.log("defined " + data.collection.items)
      this.images = data.collection.items;
      console.log(data.collection.items);
      console.log(data.collection.items[0].links[0]["href"]);
      console.log(data.collection.items[0].data[0]["description"]);
      this.imagesFound = true;
      //var index =0;
      //var outter = this.images.length/4;
      //for (var i = 0; i < this.images.length; i++) { 
      //this.customImages[i] = data.collection.items[i];
      //}
      //console.log(this.customImages);

    }
    catch (e) {
      console.log("undefined " + data.collection.items);
      this.flashMessage.show("Search request did not return any images, please try again", { cssClass: 'alert-danger', timeout: 3000 });
    }


  }

  handleError(error) {
    console.log(error);
  }

  constructor(private _imageService: ImageService, private flashMessage: FlashMessagesService) {

  }

  searchImages(query: string) {
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
