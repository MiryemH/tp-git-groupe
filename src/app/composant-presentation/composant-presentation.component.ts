
import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-composant-presentation',
  templateUrl: './composant-presentation.component.html',
  styleUrls: ['./composant-presentation.component.css']
})
export class ComposantPresentationComponent implements OnInit {
  message: string = "Je m'appelle Miryem"

  
  constructor() { }

  
  ngOnInit(): void {
  }

}
