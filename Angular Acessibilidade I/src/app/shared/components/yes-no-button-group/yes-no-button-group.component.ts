import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
    selector: 'yes-no-button-group',
    templateUrl: './yes-no-button-group.component.html',
    styleUrls: ['./yes-no-button-group.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => YesNoButtonGroupComponent),
            multi: true
        }
    ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

    @Input() public value: string = null;
    @Input() public label: string = '';
    @Output() valueChange = new EventEmitter<string>();
    public id: string = null;
    public options = YesNoButtonGroupOptions;
    public onChange = (value: string) => {};
    public onTouched = () => {};
    @Input() disabled = false;

    constructor(uniqueIdService: UniqueIdService) {
        this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
    }

    ngOnInit(): void { }

    public activate(value: string): void {
        this.writeValue(value);
    }

    public writeValue(value: any): void {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(this.value);
    }
    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}

enum YesNoButtonGroupOptions {
    YES = 'yes',
    NO = 'no'
}