import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timer',
  templateUrl: './my-timer.component.html',
  styleUrls: ['./my-timer.component.css']
})
export class MyTimerComponent implements OnInit {
  timer: number = 0;
  idTimer;
  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.idTimer = setInterval(() =>{
      this.timer++;
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.idTimer);
  }
}
