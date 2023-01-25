import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerName: string = '';
  playerEmail: string = '';
  welcomePage = true;
  showGame = false;
  points = 0;
  startTime: number = 0;
  elapsedTime: number = 0;
  elapsedTimeString: number = 0;

  startGame() {
    if (!this.playerName && this.playerEmail) {
      alert ('Podaj imię gracza');
      return;
    } else if (!this.playerEmail && this.playerName) {
      alert ('Podaj email gracza');
      return;
    } else if (!this.playerEmail && !this.playerName) {
        alert ('Podaj imię i email gracza');
        return;
    }
    // jeśli imię i email są poprawne, zapisujemy te dane i przechodzimy do strony gry
    localStorage.setItem('playerName', this.playerName);
    localStorage.setItem('playerEmail', this.playerEmail);
    this.showGame = true;
    this.welcomePage = false;
    this.startTimer();
  }
  startTimer() {
    this.startTime = Date.now();
    setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.elapsedTimeString = Math.floor(this.elapsedTime / 60000);
    }, 1000);
  }
  incrementPoints() {
    this.points++;
  }
  resetPoints() {
    this.points = 0;
  }
  exitGame() {
    this.showGame = false;
    this.welcomePage = true;
  }
}