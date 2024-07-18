import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DragDropPassportComponent } from './drag-drop-passport/drag-drop-passport.component';
import { Data } from '../types/PersonData';
import { PersonDataPlotterComponent } from './person-data-plotter/person-data-plotter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    DragDropPassportComponent,
    PersonDataPlotterComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstPartTitle = 'passport';
  secondPartTitle = 'scanner';

  baseUrl = '';
  uploadUrl = '';

  onChangeUrl(url: string) {
    this.baseUrl = url;
    this.uploadUrl = this.baseUrl + '/get-document-data';
    console.log('this.uploadUrl', this.uploadUrl);
  }

  data: null | Data = null;
  imageUrl: null | string = null;

  handleUploadResponse(response: Data) {
    this.data = response;
    console.log(response);
  }

  handleImageUrlChange(imageUrl: string | null) {
    this.imageUrl = imageUrl;
    // Handle the image URL as needed
  }

  setDataToNull() {
    this.data = null;
  }
}
