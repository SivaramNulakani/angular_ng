"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReactiveFormsComponent = /** @class */ (function () {
    function ReactiveFormsComponent(formBuilder) {
        this.genders = ['Male', 'Female'];
        this.restrictUserNames = ['Siva', 'Nulakani', 'Khayati'];
        this.restrictEmailList = ['sivaram.nulakani@gmail.com'];
    }
    ReactiveFormsComponent.prototype.ngOnInit = function () {
        this.formGroup = new forms_1.FormGroup({
            'contactDetails': new forms_1.FormGroup({ 'mobile': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.maxLength(12), forms_1.Validators.minLength(10)]) }),
            'userName': new forms_1.FormControl(null, [forms_1.Validators.required, this.restrictUserAccess.bind(this)]),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email], this.restrictEmailAccess),
            'gender': new forms_1.FormControl('Male'),
            'hobbies': new forms_1.FormArray([])
        });
        this.formGroup.statusChanges.subscribe(function (data) { return console.log(data); });
    };
    ReactiveFormsComponent.prototype.regForm = function () {
        console.log(this.formGroup);
        console.log(">> formGroup has been submitted");
    };
    ReactiveFormsComponent.prototype.addHobbies = function () {
        var hobby = new forms_1.FormControl(null, forms_1.Validators.required);
        this.formGroup.get('hobbies').push(hobby);
    };
    ReactiveFormsComponent.prototype.restrictUserAccess = function (control) {
        if (this.restrictUserNames.indexOf(control.value) != -1) {
            return { 'UserHasBeenRestricted': true };
        }
        else {
            return null;
        }
    };
    ReactiveFormsComponent.prototype.restrictEmailAccess = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'sivaram.nulakani@gmail.com') {
                    resolve({ 'emailHasbeenForbidden': true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    };
    ReactiveFormsComponent = __decorate([
        core_1.Component({
            selector: 'app-reactive-forms',
            templateUrl: './reactive-forms.component.html',
            styleUrls: ['./reactive-forms.component.css']
        })
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());
exports.ReactiveFormsComponent = ReactiveFormsComponent;
