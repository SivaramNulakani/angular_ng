"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TemplateDrivenComponent = /** @class */ (function () {
    function TemplateDrivenComponent() {
        this.optionItems = ["Apple", "Mango", "Grapes"];
        this.defaultOption = this.optionItems[0];
        this.colors = ['Red', 'Green', 'Blue'];
    }
    TemplateDrivenComponent.prototype.onSubmit = function (form) {
        form.form.patchValue({ userData: { userName: 'Siva', email: "siva@gmail.com" }, fruits: 'Apple' });
        console.log(form.value.userName);
        //form.reset();
    };
    TemplateDrivenComponent.prototype.click = function () {
        console.log(": click test has been submitted");
    };
    TemplateDrivenComponent.prototype.ngOnInit = function () {
        console.log(">>>>>>>>: ngOnInit has been submitted");
    };
    TemplateDrivenComponent = __decorate([
        core_1.Component({
            selector: 'app-template-driven',
            templateUrl: './template-driven.component.html',
            styleUrls: ['./template-driven.component.css']
        })
    ], TemplateDrivenComponent);
    return TemplateDrivenComponent;
}());
exports.TemplateDrivenComponent = TemplateDrivenComponent;
