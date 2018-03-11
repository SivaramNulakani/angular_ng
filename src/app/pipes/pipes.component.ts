import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  obj:Object={name:{firstName:"Siva",lastName:"Nulakani"},empId:"0710203",racfId:['@KNYKB','@KNYGB']};
  names={id:'5015702',name:'Siva'};
  dateVal:Date=new Date();

  constructor() { }

  ngOnInit() {
  }

}


