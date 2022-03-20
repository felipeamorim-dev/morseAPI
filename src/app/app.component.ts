import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'morse';

  habilitar: boolean = false;

  ngOnInit(): void {
    setInterval( () => {
      if(this.habilitar) {
        this.habilitar = false;
      }
    }, 5000)
  }

  habilitaAlerta(event: boolean){
    this.habilitar = event;
  }

}
