import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ee-status',
  templateUrl: './ee-status.component.html',
  styleUrls: ['./ee-status.component.css']
})
export class EeStatusComponent implements OnInit {

  eeDetails: { name: string, status: string }[];
  serverStatus = '';


  constructor() {
    this.eeDetails = [{ name: 'Siva', status: 'active' }, { name: 'Ram', status: 'LOA' }, { name: 'Khayati', status: 'promoted' }];
  }
  appStatus;
  ngOnInit() {
    let i:any=0;
    this.appStatus = new Promise((resolve, reject) => {
      setTimeout(()=>{
        this.addStatus('active')
        resolve('success'+i++);
      },2000)

    });
  }

  addStatus(serverStatus: string) {
    this.eeDetails.push({ name: 'Kittu', status: serverStatus });
  }

}
