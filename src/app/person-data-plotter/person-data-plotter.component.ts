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
    return Object.entries(this.data?.person || {});
  }

  checked: string[] = [];

  addToCurrent(input: string) {
    if (this.checked.length < 3) {
      this.checked.push(input);
      this.updatePerson();
    }
  }

  removeFromCurrent(input: string) {
    this.checked = this.checked.filter((s: string) => s !== input);
    this.updatePerson();
  }

  updatePerson() {
    if (this.data && this.data.person) {
      const person = this.data.person;

      person.FirstName = this.checked[0] || '';
      person.LastName = this.checked[1] || '';
      person.City = this.checked[2] || '';
    }
  }
}
