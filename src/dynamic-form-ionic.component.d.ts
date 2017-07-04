import { ElementRef, EventEmitter, OnChanges, QueryList, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Checkbox, DateTime, TextInput, RadioGroup, Range, Select, Toggle } from "ionic-angular";
import { DynamicFormControlComponent, DynamicFormControlModel, DynamicFormArrayGroupModel, DynamicFormControlEvent, DynamicTemplateDirective } from "@ng2-dynamic-forms/core";
export declare const enum IonicFormControlType {
    Array = 1,
    Checkbox = 2,
    DateTime = 3,
    Group = 4,
    Input = 5,
    RadioGroup = 6,
    Range = 7,
    Select = 8,
    TextArea = 9,
    Toggle = 10,
}
export declare class DynamicFormIonicComponent extends DynamicFormControlComponent implements OnChanges {
    bindId: boolean;
    context: DynamicFormArrayGroupModel;
    group: FormGroup;
    hasErrorMessaging: boolean;
    model: DynamicFormControlModel;
    nestedTemplates: QueryList<DynamicTemplateDirective>;
    blur: EventEmitter<DynamicFormControlEvent>;
    change: EventEmitter<DynamicFormControlEvent>;
    focus: EventEmitter<DynamicFormControlEvent>;
    contentTemplates: QueryList<DynamicTemplateDirective>;
    ionCheckbox: Checkbox | undefined;
    ionDateTime: DateTime | undefined;
    ionInput: TextInput | undefined;
    ionRadioGroup: RadioGroup | undefined;
    ionRange: Range | undefined;
    ionSelect: Select | undefined;
    ionToggle: Toggle | undefined;
    customTemplate: ElementRef;
    type: IonicFormControlType | undefined;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    hasCustomTemplate(): boolean;
    static getFormControlType(model: DynamicFormControlModel): IonicFormControlType | null;
}
