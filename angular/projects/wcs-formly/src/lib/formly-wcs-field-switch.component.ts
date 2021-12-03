import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'formly-wcs-field-switch',
  template: `
    <wcs-form-field [attr.is-error]="showError ? true : null">
      <wcs-switch
        [id]="to.id"
        [attr.disabled]="to.disabled ? true : null"
        [formControl]="formControl">
        <span *ngIf="to.label && to.hideLabel !== true" [attr.for]="id">
          {{ to.label }}
        </span>
      </wcs-switch>
      <wcs-error *ngIf="showError">
        <formly-validation-message #error [field]="field"></formly-validation-message>
      </wcs-error>
      <wcs-hint *ngIf="to.description">{{ to.description }}</wcs-hint>
    </wcs-form-field>
  `,
  styles: []
})
export class FormlyWcsFieldSwitchComponent extends FieldType {
}
