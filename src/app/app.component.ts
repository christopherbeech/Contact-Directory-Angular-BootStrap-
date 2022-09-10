import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  date: Date = new Date();
  modal: boolean = false

  ngOnInit() {
  }

  onClickShowModal(): void {
    this.modal = !this.modal;
  }
}
