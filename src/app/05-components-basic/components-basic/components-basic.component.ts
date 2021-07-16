import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-basic',
  templateUrl: './components-basic.component.html',
  styleUrls: ['./components-basic.component.scss']
})
export class ComponentsBasicComponent implements OnInit {

  public isOn = false;

  ngOnInit(): void {
  }

  get message() {
    return `Está ${ this.isOn ? 'Prendida' : 'Apagada'}`;
  }

  public clicked(): void {
    this.isOn = !this.isOn;
  }
}
