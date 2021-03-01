import { Component, Input, OnInit ,Output,EventEmitter,OnChanges} from '@angular/core';

@Component({
  selector: 'pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {
 @Output() res:EventEmitter<any>=new EventEmitter<any>();
private resp:any;
@Input() pre:any;
  constructor() { }
enviar(){
console.log(this.res)
  this.res.emit(this.resp);

}

  ngOnInit() {
    console.log(this.pre)
  }

}
