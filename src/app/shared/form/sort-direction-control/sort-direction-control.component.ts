import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { sortDirection } from 'src/app/interfaces';

@Component({
  selector: 'app-sort-direction-control',
  templateUrl: './sort-direction-control.component.html',
  styleUrls: ['./sort-direction-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortDirectionControlComponent),
      multi: true,
    },
  ],
})
export class SortDirectionControlComponent implements ControlValueAccessor {
  sortDirection!: sortDirection;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  disabled!: boolean;

  onChange: (value: sortDirection) => void = () => {};
  onTouch: () => void = () => {};

  constructor() {}

  writeValue(obj: sortDirection): void {
    this.sortDirection = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  toggleDirection(direction: sortDirection) {
    if (this.disabled) return;
    this.sortDirection = direction;
    this.onChange(this.sortDirection);
    this.onTouch();
  }
}
