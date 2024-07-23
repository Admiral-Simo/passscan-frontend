import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Input() firstPartTitle!: string;
  @Input() secondPartTitle!: string;
  @Output() urlChanged = new EventEmitter<string>();
  isDarkMode: boolean = false;

  urls = [
    { lang: 'golang', endpoint: 'http://31.220.89.29:8091' },
    { lang: 'python', endpoint: 'http://31.220.89.29:8000' },
  ];

  used_url = 'http://31.220.89.29:8091';

  ngOnInit(): void {
    this.urlChanged.emit(this.used_url);
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyDarkMode();
  }

  setUsedUrl(url: string) {
    this.used_url = url;
    this.urlChanged.emit(this.used_url);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  applyDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
