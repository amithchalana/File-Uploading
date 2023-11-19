import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'upload-front-end';

  imageUrl: string='';
  updatePic(eventData: Event){
    const file = (eventData.target as HTMLInputElement).files!.item(0);

    //Blob to URL 

    if(file){

      this.imageUrl = `url(${URL.createObjectURL(file)})`;
    }else{
      this.imageUrl = '' ;
    }
  }

  removePic(file: HTMLInputElement) {
    file.value = '' ;
    this.imageUrl = '' ;
    }
}
