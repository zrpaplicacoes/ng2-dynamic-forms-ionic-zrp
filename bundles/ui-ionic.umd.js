/*!
ng2-dynamic-forms-zrp 1.4.16 2017-06-23 20:37 UTC
Copyright (c) 2016-2017, Udo Schöfer http://www.udos86.de

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('ionic-angular'), require('@ng2-dynamic-forms/core'), require('@angular/common'), require('angular2-text-mask')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'ionic-angular', '@ng2-dynamic-forms/core', '@angular/common', 'angular2-text-mask'], factory) :
	(factory((global.ng2DF = global.ng2DF || {}, global.ng2DF.uiIonic = global.ng2DF.uiIonic || {}),global.ng.core,global.ng.forms,global['ionic-angular'],global.ng2DF.core,global.ng.common,global['angular2-text-mask']));
}(this, (function (exports,_angular_core,_angular_forms,ionicAngular,_ng2DynamicForms_core,_angular_common,angular2TextMask) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.DynamicFormIonicComponent = DynamicFormIonicComponent_1 = (function (_super) {
    __extends(DynamicFormIonicComponent, _super);
    function DynamicFormIonicComponent() {
        var _this = _super.call(this) || this;
        _this.bindId = true;
        _this.context = null;
        _this.hasErrorMessaging = false;
        _this.blur = new _angular_core.EventEmitter();
        _this.change = new _angular_core.EventEmitter();
        _this.focus = new _angular_core.EventEmitter();
        return _this;
    }
    DynamicFormIonicComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.type = DynamicFormIonicComponent_1.getFormControlType(this.model);
    };
    DynamicFormIonicComponent.prototype.hasCustomTemplate = function () {
        return this.customTemplate.nativeElement.children.length !== 0;
    };
    DynamicFormIonicComponent.getFormControlType = function (model) {
        switch (model.type) {
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return 1 /* Array */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return 2 /* Checkbox */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return 3 /* DateTime */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return 4 /* Group */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return 5 /* Input */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return 6 /* RadioGroup */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return 8 /* Select */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return 7 /* Range */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return 10 /* Toggle */;
            case _ng2DynamicForms_core.DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return 9 /* TextArea */;
            default:
                return null;
        }
    };
    return DynamicFormIonicComponent;
}(_ng2DynamicForms_core.DynamicFormControlComponent));
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.DynamicFormIonicComponent.prototype, "bindId", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", _ng2DynamicForms_core.DynamicFormArrayGroupModel)
], exports.DynamicFormIonicComponent.prototype, "context", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", _angular_forms.FormGroup)
], exports.DynamicFormIonicComponent.prototype, "group", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.DynamicFormIonicComponent.prototype, "hasErrorMessaging", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", _ng2DynamicForms_core.DynamicFormControlModel)
], exports.DynamicFormIonicComponent.prototype, "model", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", _angular_core.QueryList)
], exports.DynamicFormIonicComponent.prototype, "nestedTemplates", void 0);
__decorate([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], exports.DynamicFormIonicComponent.prototype, "blur", void 0);
__decorate([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], exports.DynamicFormIonicComponent.prototype, "change", void 0);
__decorate([
    _angular_core.Output(),
    __metadata("design:type", _angular_core.EventEmitter)
], exports.DynamicFormIonicComponent.prototype, "focus", void 0);
__decorate([
    _angular_core.ContentChildren(_ng2DynamicForms_core.DynamicTemplateDirective),
    __metadata("design:type", _angular_core.QueryList)
], exports.DynamicFormIonicComponent.prototype, "templates", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.Checkbox),
    __metadata("design:type", ionicAngular.Checkbox)
], exports.DynamicFormIonicComponent.prototype, "ionCheckbox", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.DateTime),
    __metadata("design:type", ionicAngular.DateTime)
], exports.DynamicFormIonicComponent.prototype, "ionDateTime", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.TextInput),
    __metadata("design:type", ionicAngular.TextInput)
], exports.DynamicFormIonicComponent.prototype, "ionInput", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.RadioGroup),
    __metadata("design:type", ionicAngular.RadioGroup)
], exports.DynamicFormIonicComponent.prototype, "ionRadioGroup", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.Range),
    __metadata("design:type", ionicAngular.Range)
], exports.DynamicFormIonicComponent.prototype, "ionRange", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.Select),
    __metadata("design:type", ionicAngular.Select)
], exports.DynamicFormIonicComponent.prototype, "ionSelect", void 0);
__decorate([
    _angular_core.ViewChild(ionicAngular.Toggle),
    __metadata("design:type", ionicAngular.Toggle)
], exports.DynamicFormIonicComponent.prototype, "ionToggle", void 0);
__decorate([
    _angular_core.ViewChild("customTemplate"),
    __metadata("design:type", _angular_core.ElementRef)
], exports.DynamicFormIonicComponent.prototype, "customTemplate", void 0);
exports.DynamicFormIonicComponent = DynamicFormIonicComponent_1 = __decorate([
    _angular_core.Component({
        selector: "dynamic-form-ionic-control",
        template: "<div [formGroup]=\"group\" [ngClass]=\"[model.cls.element.container, model.cls.grid.container]\"><ng-template *ngIf=\"hasStartTemplate && type !== 1\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"model\"></ng-template><div *ngIf=\"type === 1 && !hasCustomTemplate()\" [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"model.cls.element.control\"><fieldset *ngFor=\"let groupModel of model.groups; let idx = index\" [formGroupName]=\"idx\"><dynamic-form-ionic-control *ngFor=\"let controlModel of groupModel.group\" [bindId]=\"false\" [context]=\"groupModel\" [group]=\"control.at(idx)\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [nestedTemplates]=\"templateDirectives\" (blur)=\"onFocusChange($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocusChange($event)\"></dynamic-form-ionic-control><ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"groupModel\"></ng-template></fieldset></div><fieldset *ngIf=\"type === 4 && !hasCustomTemplate()\" [dynamicId]=\"bindId && model.id\" [formGroupName]=\"model.id\" [name]=\"model.name\" [ngClass]=\"model.cls.element.control\"><legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend><dynamic-form-ionic-control *ngFor=\"let controlModel of model.group\" [group]=\"control\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [nestedTemplates]=\"templateDirectives\" (blur)=\"onFocusChange($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocusChange($event)\"></dynamic-form-ionic-control></fieldset><ion-list *ngIf=\"type === 6 && !hasCustomTemplate()\" radio-group [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"><ion-list-header *ngIf=\"model.label !== null\">{{model.label}}</ion-list-header><ion-item *ngFor=\"let option of model.options$ | async\"><ion-label>{{option.label}}</ion-label><ion-radio [value]=\"option.value\"></ion-radio></ion-item></ion-list><ion-item *ngIf=\"type !== 1 && type !== 4 && type !== 6 && !hasCustomTemplate()\" [ngSwitch]=\"type\"><ion-label *ngIf=\"(model.label !== null) && (type !== 2)\" stacked [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-label *ngIf=\"(model.label !== null) && (type === 2)\" [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-checkbox *ngSwitchCase=\"2\" [checked]=\"model.checked\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"></ion-checkbox><ion-datetime *ngSwitchCase=\"3\" [disabled]=\"model.disabled\" [displayFormat]=\"model.format\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" (ionChange)=\"onValueChange($event)\"></ion-datetime><ion-input *ngSwitchCase=\"5\" clearInput=\"true\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\" [step]=\"model.step\" [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\" [type]=\"model.inputType\"></ion-input><ion-range *ngSwitchCase=\"7\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [pin]=\"true\" [snaps]=\"true\" [step]=\"model.step\" (ionChange)=\"onValueChange($event)\"></ion-range><ion-select *ngSwitchCase=\"8\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [multiple]=\"model.multiple\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" (ionChange)=\"onValueChange($event)\"><ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{option.label}}</ion-option></ion-select><ion-textarea *ngSwitchCase=\"9\" clearInput=\"true\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\"></ion-textarea><ion-toggle *ngSwitchCase=\"10\" [checked]=\"model.checked\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"></ion-toggle></ion-item><div *ngIf=\"hasErrorMessaging\" [hidden]=\"!showErrorMessages\" [ngClass]=\"[model.cls.element.errors, model.cls.grid.errors]\"><p class=\"has-error\"><span *ngFor=\"let message of errorMessages\">{{message}}</span></p></div><ng-template *ngIf=\"hasEndTemplate && type !== 1\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"model\"></ng-template><div #customTemplate><ng-content></ng-content></div></div>"
    }),
    __metadata("design:paramtypes", [])
], exports.DynamicFormIonicComponent);
var DynamicFormIonicComponent_1;

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.DynamicFormsIonicUIModule = (function () {
    function DynamicFormsIonicUIModule() {
    }
    return DynamicFormsIonicUIModule;
}());
exports.DynamicFormsIonicUIModule = __decorate$1([
    _angular_core.NgModule({
        imports: [
            _angular_common.CommonModule,
            _angular_forms.ReactiveFormsModule,
            ionicAngular.IonicModule,
            angular2TextMask.TextMaskModule,
            _ng2DynamicForms_core.DynamicFormsCoreModule
        ],
        declarations: [
            exports.DynamicFormIonicComponent
        ],
        exports: [
            _ng2DynamicForms_core.DynamicFormsCoreModule,
            exports.DynamicFormIonicComponent
        ]
    })
], exports.DynamicFormsIonicUIModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
