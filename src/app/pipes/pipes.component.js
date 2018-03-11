"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
        this.obj = { name: { firstName: "Siva", lastName: "Nulakani" }, empId: "0710203", racfId: ['@KNYKB', '@KNYGB'] };
        this.names = { id: '5015702', name: 'Siva' };
        this.dateVal = new Date();
    }
    PipesComponent.prototype.ngOnInit = function () {
    };
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'app-pipes',
            templateUrl: './pipes.component.html',
            styleUrls: ['./pipes.component.css']
        })
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;
