import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.Native
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['Male', 'Female'];
  restrictUserNames = ['Siva', 'Nulakani', 'Khayati'];
  restrictEmailList = ['sivaram.nulakani@gmail.com'];
  formGroup: FormGroup;
  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges.debounceTime(400).distinctUntilChanged().filter(data => {
      if (data != null || data == "")
        return data;
    }).subscribe(data => {
      if (this.searches.indexOf(data) == -1)
        this.searches.push(data)
    });
  }
  constructor(formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      'contactDetails': new FormGroup({
        'mobile': new FormControl(9951541007, [Validators.required, Validators.minLength(10), Validators.maxLength(15)])
      }),
      'userName': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), this.restrictUserAccess.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.restrictEmailAccess),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([]),
      'comment': new FormControl('Sivaramakrishna', Validators.required)
    });

    //this.formGroup.statusChanges.subscribe((data) => console.log('$$$$$$$$$$$$$$$' + data));
    this.formGroup.valueChanges.filter((data) => this.formGroup.valid).map(data => {
      data.lastUpdateTS = new Date();
      return data
    }).subscribe(data => console.log(JSON.stringify(data)));
  }

  regForm() {
    if (this.formGroup.valid) {
      console.log(this.formGroup);
      console.log(">> formGroup has been submitted")
    }
  }

  addHobbies() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.formGroup.get('hobbies')).push(hobby);
  }

  restrictUserAccess(control: FormControl): { [str: string]: boolean } {
    if (this.restrictUserNames.indexOf(control.value) != -1) {
      return { 'UserHasBeenRestricted': true }
    } else {
      return null;
    }
  }

  restrictEmailAccess(control: FormControl): Observable<any> | Promise<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'sivaram.nulakani@gmail.com') {
          resolve({ 'emailHasbeenForbidden': true })
        } else {
          resolve(null);
        }
      }, 2000)
    })
    return promise;
  }

  onReset() {
    this.formGroup.reset()
  }

}
