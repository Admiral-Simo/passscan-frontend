import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Data } from '../../types/PersonData';

@Component({
  selector: 'app-person-data-plotter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-data-plotter.component.html',
  styleUrl: './person-data-plotter.component.css',
})
export class PersonDataPlotterComponent {
  @Input() data!: Data | null;
  @Input() imageUrl!: string | null;

  personEntries(): [string, string][] {
    return Object.entries(this.data || {});
  }

  jsonData(): string {
    return JSON.stringify(this.data, null, 2);
  }

  downloadJSON(): void {
    const text = JSON.stringify(this.data, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  copyJSON(): void {
    const text = JSON.stringify(this.data, null, 2);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('JSON copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy JSON: ', err);
      });
    alert('copied json');
  }
}
