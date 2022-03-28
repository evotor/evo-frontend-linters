import { ChangeDetectorRef, Directive, DoCheck, Injector, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArray,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validator
} from '@angular/forms';
import { EVO_INPUT_MASKS } from '../constants/evo-input-masks';
import { EVO_ERROR_MESSAGES } from '../constants/evo-error-messages';
import { EvoBaseControl } from './evo-base-control';

@Directive()
/**
 * M - form data interface for current section
 */
export abstract class AbstractFormGroupComponentDirective<M> extends EvoBaseControl implements OnInit, ControlValueAccessor, Validator, DoCheck {

    form!: FormGroup;
    readonly EVO_INPUT_MASKS = EVO_INPUT_MASKS;
    readonly EVO_ERROR_MESSAGES = EVO_ERROR_MESSAGES;
    protected _value!: M;

    constructor(
        protected override readonly injector: Injector,
        protected readonly fb: FormBuilder,
        protected readonly cdr: ChangeDetectorRef,
    ) {
        super(injector);
    }

    /**
     * Init local form
     *
     * @protected
     */
    protected abstract initForm(): void;

    /**
     * Init form value change subscription
     *
     * @protected
     */
    protected abstract initFormSubscription(): void;

    /**
     * Serialize local form value to model<M>
     *
     * @protected
     */
    protected abstract serializeFormToModel(): M;

    ngOnInit(): void {
        this.initForm();
        this.initFormSubscription();
    }

    ngDoCheck(): void {
        this.controlTouchedCheck(this.form);
        this.controlDirtyCheck(this.form);
    }

    get value(): M {
        return this._value;
    }

    set value(value: M) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }

    writeValue(value: M) {
        this._value = value;
        this.form.patchValue(this.serializeModelToForm(value));
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    setDisabledState(isDisabled: boolean) {
        if (isDisabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    onChange(_: any): void {
    }

    onTouched(): void {
    }

    validate(_: AbstractControl): ValidationErrors | null {
        return this.form.invalid
            ? {
                childForm: {valid: false},
            }
            : null;
    }

    /**
     * Convert model<M> value to raw form
     *
     * @param value
     * @protected
     */
    protected serializeModelToForm(value: M): any {
        return value;
    }

    protected controlTouchedCheck(controlToCheck: AbstractControl): void {
        if (!this.control || this.control.untouched) {
            return;
        }
        if (this.control?.touched) {
            controlToCheck.markAsTouched();
            this.cdr.markForCheck();
            if (controlToCheck instanceof FormGroup || controlToCheck instanceof FormArray) {
                for (const controlName of Object.keys(controlToCheck.controls)) {
                    this.controlTouchedCheck(controlToCheck.get(controlName));
                }
            }
        }
    }

    protected controlDirtyCheck(controlToCheck: AbstractControl): void {
        if (!this.control || this.control.pristine) {
            return;
        }
        if (this.control?.dirty) {
            controlToCheck.markAsDirty();
            this.cdr.markForCheck();
            if (controlToCheck instanceof FormGroup || controlToCheck instanceof FormArray) {
                for (const controlName of Object.keys(controlToCheck.controls)) {
                    this.controlDirtyCheck(controlToCheck.get(controlName));
                }
            }
        }
    }
}
