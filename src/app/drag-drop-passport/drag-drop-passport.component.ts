import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-drag-drop-passport',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './drag-drop-passport.component.html',
  styleUrls: ['./drag-drop-passport.component.css'],
})
export class DragDropPassportComponent {
  @Input() url!: string;
  @Output() uploadResponse = new EventEmitter<any>();
  @Output() imageUrlChange = new EventEmitter<string | null>();
  isDragging = false;
  imageUrl: string | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onBrowseClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
      this.imageUrlChange.emit(this.imageUrl);
      this.uploadFile(file);
    };
    reader.readAsDataURL(file);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.http.post(this.url, formData).subscribe(
      (response) => {
        this.uploadResponse.emit(response);
      },
      (error) => {
        console.log('Fail to uploaded file', error);
      },
    );
  }
}
