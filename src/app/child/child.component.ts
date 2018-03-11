import { Component, OnInit } from '@angular/core';
import { MessageService } from "app/services/message.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
