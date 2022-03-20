import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  childDataReceived: string = '';
  @Output() alerta = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  ReceiveData(event: string){
    this.childDataReceived = event;
  }

  propagaError(event: string){
    if(event === 'error'){
      this.childDataReceived = '';
      this.alerta.emit(true);
    }
  }
}
