import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DragDropPassportComponent } from './drag-drop-passport/drag-drop-passport.component';

interface Person {
  CNE: string;
  FirstName: string;
  LastName: string;
  City: string;
  BirthDate: Date;
  ExpireDate: Date;
}

interface Data {
  person: Person;
  possible_names_address: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    DragDropPassportComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstPartTitle = 'passport';
  secondPartTitle = 'scanner';
  uploadUrl = 'http://localhost:8080/get-passport-data';

  data: null | Data = null;
  imageUrl: null | string = null;

  handleUploadResponse(response: Data) {
    this.data = response;
  }

  handleImageUrlChange(imageUrl: string | null) {
    this.imageUrl = imageUrl;
    // Handle the image URL as needed
  }
}
