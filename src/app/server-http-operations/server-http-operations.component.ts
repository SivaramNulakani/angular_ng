import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ServerHttpServiceService } from "../services/server-http-service.service";
import { Response } from '@angular/http';

@Component({
  selector: 'app-server-http-operations',
  templateUrl: './server-http-operations.component.html',
  styleUrls: ['./server-http-operations.component.css']
})
export class ServerHttpOperationsComponent implements OnInit {

  serverForm: FormGroup;
  serverName: FormControl = new FormControl();
  serverId: FormControl = new FormControl();
  status: FormControl = new FormControl();
  constructor(private serverHttpServiceService: ServerHttpServiceService) {
    this.serverForm = new FormGroup({
      serverName: this.serverName, serverId: this.serverId, status: this.status
    });
  }

  ngOnInit() {
    // this.serverForm.valueChanges.subscribe(data => console.log(data));
    //this.getServerDetails();
  }
  onSaveServerDetails() {
    this.serverHttpServiceService.saveServerDetails(this.serverForm).subscribe(
    (response:Response) => console.log(response.json()), 
    (error) => console.log('server status ==>'+error))
  }
getServerDetails(){
  this.serverHttpServiceService.getServerDetails().subscribe((data:any[])=>console.log(data),(error)=>console.log(error))
}
}
