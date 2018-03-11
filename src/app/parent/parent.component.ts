import { Component, OnInit } from '@angular/core';
import { MessageService } from "app/services/message.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //providers: [MessageService]
  //viewProviders:[MessageService]
})
export class ParentComponent implements OnInit {

  constructor(private messageService : MessageService) { }

  ngOnInit() {
  }

}
