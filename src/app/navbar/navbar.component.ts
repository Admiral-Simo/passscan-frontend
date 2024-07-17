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
    { lang: 'golang', endpoint: '31.220.89.29:8091' },
    { lang: 'python', endpoint: '31.220.89.29:8092' },
  ];

  used_url = '31.220.89.29:8091';

  ngOnInit(): void {
    this.urlChanged.emit(this.used_url);
  }

  setUsedUrl(url: string) {
    this.used_url = url;
    this.urlChanged.emit(this.used_url);
  }
}
