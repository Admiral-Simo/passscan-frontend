import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drag-drop-passport',
  standalone: true,
  imports: [],
  templateUrl: './drag-drop-passport.component.html',
  styleUrls: ['./drag-drop-passport.component.css'],
})
export class DragDropPassportComponent {
  isDragging = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

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
    // Handle the file (e.g., upload it, display a preview, etc.)
    console.log('File selected:', file);
  }
}
