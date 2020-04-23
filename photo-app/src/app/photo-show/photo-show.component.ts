import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.submitted.emit();
  }
}
