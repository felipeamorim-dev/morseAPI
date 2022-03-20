import { MorseServiceService } from './../../services/morse-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {


  childData: string = '';
  mensagemErro: string = 'error'
  traducaoProgresso: boolean = false;
  @Output() childStringData: EventEmitter<string> = new EventEmitter();
  @Output() error = new EventEmitter();

  constructor(private morseService: MorseServiceService) { }

  ngOnInit(): void {

  }

  sendData(event: any) {
    this.traducaoProgresso = true;
    this.childData = event.target.value;


    this.morseService.getMorse(this.childData).subscribe({
      next: data => {
        this.childStringData.emit(data.contents.translated);
        this.traducaoProgresso = false;
      },
      error: () => {
        this.error.emit(this.mensagemErro);
        this.traducaoProgresso = false;
      }
    });

  }

}
