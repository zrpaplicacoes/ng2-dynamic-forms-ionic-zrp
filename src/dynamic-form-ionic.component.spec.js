import { DebugElement } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DynamicCheckboxModel, DynamicCheckboxGroupModel, DynamicDatePickerModel, DynamicEditorModel, DynamicFileUploadModel, DynamicFormArrayModel, DynamicFormControlModel, DynamicFormGroupModel, DynamicInputModel, DynamicRadioGroupModel, DynamicSelectModel, DynamicSliderModel, DynamicSwitchModel, DynamicTextAreaModel, DynamicTimePickerModel } from "@ng2-dynamic-forms/core";
import { DynamicFormIonicComponent } from "./dynamic-form-ionic.component";
describe("DynamicFormIonicComponent test suite", function () {
    var formModel = [
        new DynamicCheckboxModel({ id: "checkbox" }),
        new DynamicCheckboxGroupModel({ id: "checkboxGroup", group: [] }),
        new DynamicDatePickerModel({ id: "datepicker" }),
        new DynamicEditorModel({ id: "editor" }),
        new DynamicFileUploadModel({ id: "upload", url: "" }),
        new DynamicFormArrayModel({ id: "formArray", createGroup: function () { return []; } }),
        new DynamicFormGroupModel({ id: "formGroup", group: [] }),
        new DynamicInputModel({ id: "input", maxLength: 51 }),
        new DynamicRadioGroupModel({ id: "radioGroup" }),
        new DynamicSelectModel({ id: "select", options: [{ value: "One" }, { value: "Two" }], value: "One" }),
        new DynamicSliderModel({ id: "slider" }),
        new DynamicSwitchModel({ id: "switch" }),
        new DynamicTextAreaModel({ id: "textarea" }),
        new DynamicTimePickerModel({ id: "timepicker" })
    ], testModel = formModel[7], formGroup, fixture, component, debugElement, testElement;
    /*
    beforeEach(async(() => {

        TestBed.configureTestingModule({

            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                IonicModule,
                TextMaskModule,
                DynamicFormsCoreModule.forRoot()
            ],
            declarations: [DynamicFormIonicComponent]

        }).compileComponents().then(() => {

            fixture = TestBed.createComponent(DynamicFormIonicComponent);

            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
        });
    }));

    beforeEach(inject([DynamicFormService], (service: DynamicFormService) => {

        formGroup = service.createFormGroup(formModel);

        component.group = formGroup;
        component.model = testModel;

        fixture.detectChanges();

        testElement = debugElement.query(By.css(`input[id='${testModel.id}']`));
    }));
    */
    xit("should initialize correctly", function () {
        expect(component.context).toBeNull();
        expect(component.control instanceof FormControl).toBe(true);
        expect(component.group instanceof FormGroup).toBe(true);
        expect(component.model instanceof DynamicFormControlModel).toBe(true);
        expect(component.hasErrorMessaging).toBe(false);
        expect(component.onControlValueChanges).toBeDefined();
        expect(component.onModelDisabledUpdates).toBeDefined();
        expect(component.onModelValueUpdates).toBeDefined();
        expect(component.blur).toBeDefined();
        expect(component.change).toBeDefined();
        expect(component.focus).toBeDefined();
        expect(component.onValueChange).toBeDefined();
        expect(component.onFocusChange).toBeDefined();
        expect(component.isValid).toBe(true);
        expect(component.isInvalid).toBe(false);
        expect(component.showErrorMessages).toBe(false);
        expect(component.type).toEqual(5 /* Input */);
    });
    xit("should have an input element", function () {
        expect(testElement instanceof DebugElement).toBe(true);
    });
    xit("should listen to native focus and blur events", function () {
        spyOn(component, "onFocusChange");
        testElement.triggerEventHandler("focus", null);
        testElement.triggerEventHandler("blur", null);
        expect(component.onFocusChange).toHaveBeenCalledTimes(2);
    });
    xit("should listen to native change event", function () {
        spyOn(component, "onValueChange");
        testElement.triggerEventHandler("change", null);
        expect(component.onValueChange).toHaveBeenCalled();
    });
    xit("should update model value when control value changes", function () {
        spyOn(component, "onControlValueChanges");
        component.ngOnInit();
        component.control.setValue("test");
        expect(component.onControlValueChanges).toHaveBeenCalled();
    });
    xit("should update control value when model value changes", function () {
        spyOn(component, "onModelValueUpdates");
        component.ngOnInit();
        testModel.valueUpdates.next("test");
        expect(component.onModelValueUpdates).toHaveBeenCalled();
    });
    xit("should update control activation when model disabled property changes", function () {
        spyOn(component, "onModelDisabledUpdates");
        component.ngOnInit();
        testModel.disabledUpdates.next(true);
        expect(component.onModelDisabledUpdates).toHaveBeenCalled();
    });
    it("should determine correct form control type", function () {
        var testFn = DynamicFormIonicComponent.getFormControlType;
        expect(testFn(formModel[0])).toEqual(2 /* Checkbox */);
        expect(testFn(formModel[1])).toEqual(4 /* Group */);
        expect(testFn(formModel[2])).toEqual(3 /* DateTime */);
        expect(testFn(formModel[3])).toBeNull();
        expect(testFn(formModel[4])).toBeNull();
        expect(testFn(formModel[5])).toEqual(1 /* Array */);
        expect(testFn(formModel[6])).toEqual(4 /* Group */);
        expect(testFn(formModel[7])).toEqual(5 /* Input */);
        expect(testFn(formModel[8])).toEqual(6 /* RadioGroup */);
        expect(testFn(formModel[9])).toEqual(8 /* Select */);
        expect(testFn(formModel[10])).toEqual(7 /* Range */);
        expect(testFn(formModel[11])).toEqual(10 /* Toggle */);
        expect(testFn(formModel[12])).toEqual(9 /* TextArea */);
        expect(testFn(formModel[13])).toEqual(3 /* DateTime */);
    });
});

//# sourceMappingURL=dynamic-form-ionic.component.spec.js.map
