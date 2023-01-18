import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'home';
  title = 'examSnake';

  changePage(page: string) {
    this.currentPage = page;
  }
}
