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

  urls = [
    { lang: 'golang', endpoint: 'http://31.220.89.29:8091' },
    { lang: 'python', endpoint: 'http://31.220.89.29:8000' },
  ];

  used_url = 'http://31.220.89.29:8091';

  ngOnInit(): void {
    this.urlChanged.emit(this.used_url);
  }

  setUsedUrl(url: string) {
    this.used_url = url;
    this.urlChanged.emit(this.used_url);
  }
}
