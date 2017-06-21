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
import { Component, ContentChildren, Input, EventEmitter, Output, QueryList, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Checkbox, DateTime, TextInput, RadioGroup, Range, Select, Toggle } from "ionic-angular";
import { DynamicFormControlComponent, DynamicFormControlModel, DynamicFormArrayGroupModel, DynamicTemplateDirective, DYNAMIC_FORM_CONTROL_TYPE_ARRAY, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX, DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP, DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER, DYNAMIC_FORM_CONTROL_TYPE_GROUP, DYNAMIC_FORM_CONTROL_TYPE_INPUT, DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DYNAMIC_FORM_CONTROL_TYPE_SELECT, DYNAMIC_FORM_CONTROL_TYPE_SLIDER, DYNAMIC_FORM_CONTROL_TYPE_SWITCH, DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER } from "@ng2-dynamic-forms/core";
var DynamicFormIonicComponent = DynamicFormIonicComponent_1 = (function (_super) {
    __extends(DynamicFormIonicComponent, _super);
    function DynamicFormIonicComponent() {
        var _this = _super.call(this) || this;
        _this.bindId = true;
        _this.context = null;
        _this.hasErrorMessaging = false;
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.focus = new EventEmitter();
        return _this;
    }
    DynamicFormIonicComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.type = DynamicFormIonicComponent_1.getFormControlType(this.model);
    };
    DynamicFormIonicComponent.getFormControlType = function (model) {
        switch (model.type) {
            case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
                return 1 /* Array */;
            case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
                return 2 /* Checkbox */;
            case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
            case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
                return 3 /* DateTime */;
            case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
            case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
                return 4 /* Group */;
            case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
                return 5 /* Input */;
            case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
                return 6 /* RadioGroup */;
            case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
                return 8 /* Select */;
            case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
                return 7 /* Range */;
            case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
                return 10 /* Toggle */;
            case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
                return 9 /* TextArea */;
            default:
                return null;
        }
    };
    return DynamicFormIonicComponent;
}(DynamicFormControlComponent));
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DynamicFormIonicComponent.prototype, "bindId", void 0);
__decorate([
    Input(),
    __metadata("design:type", DynamicFormArrayGroupModel)
], DynamicFormIonicComponent.prototype, "context", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], DynamicFormIonicComponent.prototype, "group", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DynamicFormIonicComponent.prototype, "hasErrorMessaging", void 0);
__decorate([
    Input(),
    __metadata("design:type", DynamicFormControlModel)
], DynamicFormIonicComponent.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", QueryList)
], DynamicFormIonicComponent.prototype, "nestedTemplates", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DynamicFormIonicComponent.prototype, "blur", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DynamicFormIonicComponent.prototype, "change", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DynamicFormIonicComponent.prototype, "focus", void 0);
__decorate([
    ContentChildren(DynamicTemplateDirective),
    __metadata("design:type", QueryList)
], DynamicFormIonicComponent.prototype, "templates", void 0);
__decorate([
    ViewChild(Checkbox),
    __metadata("design:type", Checkbox)
], DynamicFormIonicComponent.prototype, "ionCheckbox", void 0);
__decorate([
    ViewChild(DateTime),
    __metadata("design:type", DateTime)
], DynamicFormIonicComponent.prototype, "ionDateTime", void 0);
__decorate([
    ViewChild(TextInput),
    __metadata("design:type", TextInput)
], DynamicFormIonicComponent.prototype, "ionInput", void 0);
__decorate([
    ViewChild(RadioGroup),
    __metadata("design:type", RadioGroup)
], DynamicFormIonicComponent.prototype, "ionRadioGroup", void 0);
__decorate([
    ViewChild(Range),
    __metadata("design:type", Range)
], DynamicFormIonicComponent.prototype, "ionRange", void 0);
__decorate([
    ViewChild(Select),
    __metadata("design:type", Select)
], DynamicFormIonicComponent.prototype, "ionSelect", void 0);
__decorate([
    ViewChild(Toggle),
    __metadata("design:type", Toggle)
], DynamicFormIonicComponent.prototype, "ionToggle", void 0);
DynamicFormIonicComponent = DynamicFormIonicComponent_1 = __decorate([
    Component({
        selector: "dynamic-form-ionic-control",
        template: "<div [formGroup]=\"group\" [ngClass]=\"[model.cls.element.container, model.cls.grid.container]\"><ng-template *ngIf=\"hasStartTemplate && type !== 1\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"model\"></ng-template><div *ngIf=\"type === 1\" [dynamicId]=\"bindId && model.id\" [formArrayName]=\"model.id\" [ngClass]=\"model.cls.element.control\"><fieldset *ngFor=\"let groupModel of model.groups; let idx = index\" [formGroupName]=\"idx\"><dynamic-form-ionic-control *ngFor=\"let controlModel of groupModel.group\" [bindId]=\"false\" [context]=\"groupModel\" [group]=\"control.at(idx)\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [nestedTemplates]=\"templateDirectives\" (blur)=\"onFocusChange($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocusChange($event)\"></dynamic-form-ionic-control><ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"groupModel\"></ng-template></fieldset></div><fieldset *ngIf=\"type === 4\" [dynamicId]=\"bindId && model.id\" [formGroupName]=\"model.id\" [name]=\"model.name\" [ngClass]=\"model.cls.element.control\"><legend *ngIf=\"model.legend\" [innerHTML]=\"model.legend\"></legend><dynamic-form-ionic-control *ngFor=\"let controlModel of model.group\" [group]=\"control\" [hasErrorMessaging]=\"controlModel.hasErrorMessages\" [model]=\"controlModel\" [nestedTemplates]=\"templateDirectives\" (blur)=\"onFocusChange($event)\" (change)=\"onValueChange($event)\" (focus)=\"onFocusChange($event)\"></dynamic-form-ionic-control></fieldset><ion-list *ngIf=\"type === 6\" radio-group [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"><ion-list-header *ngIf=\"model.label !== null\">{{model.label}}</ion-list-header><ion-item *ngFor=\"let option of model.options$ | async\"><ion-label stacked>{{option.label}}</ion-label><ion-radio [value]=\"option.value\"></ion-radio></ion-item></ion-list><ion-item *ngIf=\"type !== 1 && type !== 4 && type !== 6\" [ngSwitch]=\"type\"><ion-label *ngIf=\"model.label !== null\" stacked [innerHTML]=\"model.label\" [ngClass]=\"[model.cls.element.label, model.cls.grid.label]\"></ion-label><ion-checkbox *ngSwitchCase=\"2\" [checked]=\"model.checked\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"></ion-checkbox><ion-datetime *ngSwitchCase=\"3\" [disabled]=\"model.disabled\" [displayFormat]=\"model.format\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" (ionChange)=\"onValueChange($event)\"></ion-datetime><ion-input *ngSwitchCase=\"5\" clearInput=\"true\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\" [step]=\"model.step\" [textMask]=\"{mask: (model.mask || false), showMask: model.mask && !(model.placeholder)}\" [type]=\"model.inputType\"></ion-input><ion-range *ngSwitchCase=\"7\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [max]=\"model.max\" [min]=\"model.min\" [ngClass]=\"model.cls.element.control\" [pin]=\"true\" [snaps]=\"true\" [step]=\"model.step\" (ionChange)=\"onValueChange($event)\"></ion-range><ion-select *ngSwitchCase=\"8\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [multiple]=\"model.multiple\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" (ionChange)=\"onValueChange($event)\"><ion-option *ngFor=\"let option of model.options$ | async\" [value]=\"option.value\">{{option.label}}</ion-option></ion-select><ion-textarea *ngSwitchCase=\"9\" clearInput=\"true\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" [placeholder]=\"model.placeholder\" [readonly]=\"model.readOnly\"></ion-textarea><ion-toggle *ngSwitchCase=\"10\" [checked]=\"model.checked\" [disabled]=\"model.disabled\" [dynamicId]=\"bindId && model.id\" [formControlName]=\"model.id\" [ngClass]=\"model.cls.element.control\" (ionChange)=\"onValueChange($event)\"></ion-toggle></ion-item><ng-template *ngIf=\"hasEndTemplate && type !== 1\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"model\"></ng-template><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [])
], DynamicFormIonicComponent);
export { DynamicFormIonicComponent };
var DynamicFormIonicComponent_1;

//# sourceMappingURL=dynamic-form-ionic.component.js.map
