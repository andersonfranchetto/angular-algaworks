import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  //PODERIA USAR UM ALIAS POR EXEMPLO: @Input('Fun')
  @Input() funcionario: any;

  constructor() { }
}
