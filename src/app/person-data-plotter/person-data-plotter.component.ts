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
}
