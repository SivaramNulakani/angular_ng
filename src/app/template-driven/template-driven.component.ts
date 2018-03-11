import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

optionItems: String[] = ["Apple", "Mango", "Grapes"];
  defaultOption = this.optionItems[0];
  colors = ['Red', 'Green', 'Blue']

  onSubmit(form: NgForm) {
    form.form.patchValue({userData:{userName:'Siva',email:"siva@gmail.com"}, fruits:'Apple'});
    console.log(form.value.userName)
    //form.reset();
}

click() {
  console.log(": click test has been submitted");
}
ngOnInit() {
  console.log(">>>>>>>>: ngOnInit has been submitted");
}

}
