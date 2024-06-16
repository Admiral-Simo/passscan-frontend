import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DragDropPassportComponent } from './drag-drop-passport/drag-drop-passport.component';

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

  handleUploadResponse(response: any) {
    console.log('Upload response received:', response);
    // Handle the response as needed
  }

  handleImageUrlChange(imageUrl: string | null) {
    console.log('Image URL changed:', imageUrl);
    // Handle the image URL as needed
  }
}
