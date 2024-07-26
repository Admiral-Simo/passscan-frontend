import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DragDropPassportComponent } from './drag-drop-passport/drag-drop-passport.component';
import { Data } from '../types/PersonData';
import { PersonDataPlotterComponent } from './person-data-plotter/person-data-plotter.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';

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
export class AppComponent implements OnInit {
  firstPartTitle = 'passport';
  secondPartTitle = 'scanner';

  // this should get the data from this url and put it into the uploadHistoryData
  uploadHistoryUrl = 'http://31.220.89.29:8091/get-upload-history';
  uploadHistoryData: IUploadHistory | null = null;

  baseUrl = '';
  uploadUrl = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUploadHistory();
    console.log(this.uploadHistoryData);
  }

  stringified(): string {
    return JSON.stringify(this.uploadHistoryData);
  }

  fetchUploadHistory() {
    this.http.get<IUploadHistory>(this.uploadHistoryUrl).subscribe(
      (data) => {
        this.uploadHistoryData = data;
        console.log('Upload history data:', this.uploadHistoryData);
      },
      (error) => {
        console.error('Error fetching upload history data:', error);
      },
    );
  }

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

  getKeys(obj: IUploadHistory): string[] {
    return Object.keys(obj).reverse();
  }
}

type IUploadHistory = {
  [key: string]: string[];
};
