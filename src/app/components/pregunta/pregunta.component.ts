import { Component, Input, OnInit ,Output,EventEmitter,OnChanges} from '@angular/core';

@Component({
  selector: 'pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {
 @Output() res=new EventEmitter();
private resp:any;
@Input() pre:any;
@Input() mod:any;

  constructor() { }

OnChanges(){
  console.log("resp"+this.resp);
  let resp=this.resp;
  this.res.emit(this.mod);
}
  ngOnInit() {
    console.log("inicia")
  }

}
