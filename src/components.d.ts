/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Color,
} from './interface';
import {
  ButtonType,
} from './components/button/button-interface';
import {
  EventEmitter,
} from '@stencil/core';
import {
  CheckboxChangeEventDetail,
} from './components/checkbox/checkbox-interface';
import {
  SelectOptionChosedEvent,
} from './components/select-option/select-option-interface';
import {
  SelectChangeEventDetail,
} from './components/select/select-interface';
import {
  WcsTabsAlignment,
  WcsTabsChangeEvent,
} from './components/tabs/tabs-interface';


export namespace Components {

  interface WcsApp {}
  interface WcsAppAttributes extends StencilHTMLAttributes {}

  interface WcsBadge {
    /**
    * Select the badge color.
    */
    'color': Color;
  }
  interface WcsBadgeAttributes extends StencilHTMLAttributes {
    /**
    * Select the badge color.
    */
    'color'?: Color;
  }

  interface WcsButton {
    /**
    * Specify the button color.
    */
    'color': Color;
    /**
    * Specify wether the button is disabled or not.
    */
    'disabled': boolean;
    /**
    * Set a URL to point to. If specified use a `a` tag instead of `btn`.
    */
    'href'?: string;
    /**
    * This attribute specifies the size of the button. Setting this attribute will change the height and padding of a button.
    */
    'mode': 'normal' | 'small' | 'block' | 'icon-only' | 'round';
    /**
    * Specify wether the button should have a ripple effect or not.
    */
    'ripple': boolean;
    /**
    * Specify the button type.
    */
    'type': ButtonType;
  }
  interface WcsButtonAttributes extends StencilHTMLAttributes {
    /**
    * Specify the button color.
    */
    'color'?: Color;
    /**
    * Specify wether the button is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Set a URL to point to. If specified use a `a` tag instead of `btn`.
    */
    'href'?: string;
    /**
    * This attribute specifies the size of the button. Setting this attribute will change the height and padding of a button.
    */
    'mode'?: 'normal' | 'small' | 'block' | 'icon-only' | 'round';
    /**
    * Specify wether the button should have a ripple effect or not.
    */
    'ripple'?: boolean;
    /**
    * Specify the button type.
    */
    'type'?: ButtonType;
  }

  interface WcsCardBody {}
  interface WcsCardBodyAttributes extends StencilHTMLAttributes {}

  interface WcsCard {}
  interface WcsCardAttributes extends StencilHTMLAttributes {}

  interface WcsCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    'indeterminate': false;
    'name': any;
    'value': any;
  }
  interface WcsCheckboxAttributes extends StencilHTMLAttributes {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    'indeterminate'?: false;
    'name'?: any;
    /**
    * Emitted when the checked property has changed.
    */
    'onWcsChange'?: (event: CustomEvent<CheckboxChangeEventDetail>) => void;
    'value'?: any;
  }

  interface WcsHeader {}
  interface WcsHeaderAttributes extends StencilHTMLAttributes {}

  interface WcsIcon {
    'icon': string;
    'size': 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }
  interface WcsIconAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'size'?: 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }

  interface WcsInput {
    'background': 'normal' | 'white';
    'name': any;
    'value': any;
  }
  interface WcsInputAttributes extends StencilHTMLAttributes {
    'background'?: 'normal' | 'white';
    'name'?: any;
    'value'?: any;
  }

  interface WcsProgressBar {
    /**
    * Whether it displays a label indicating the percentage of progress above the bar.
    */
    'showLabel': boolean;
    /**
    * Whether the component display the small version
    */
    'small': boolean;
    /**
    * The actual value of the progress. Ranging from 0 to 100.
    */
    'value': number;
  }
  interface WcsProgressBarAttributes extends StencilHTMLAttributes {
    /**
    * Whether it displays a label indicating the percentage of progress above the bar.
    */
    'showLabel'?: boolean;
    /**
    * Whether the component display the small version
    */
    'small'?: boolean;
    /**
    * The actual value of the progress. Ranging from 0 to 100.
    */
    'value'?: number;
  }

  interface WcsProgressRadial {
    'showLabel': boolean;
    'size': number;
    'value': number;
  }
  interface WcsProgressRadialAttributes extends StencilHTMLAttributes {
    'showLabel'?: boolean;
    'size'?: number;
    'value'?: number;
  }

  interface WcsSelectOption {
    /**
    * Wether this option can be selected.
    */
    'disabled': boolean;
    /**
    * Wether this option is selected.
    */
    'selected': boolean;
    /**
    * This property should not be used, it is only meant for internal use.
    */
    'slot': string;
    /**
    * The option value, not what's displayed, use inner text instead.
    */
    'value'?: any | null;
  }
  interface WcsSelectOptionAttributes extends StencilHTMLAttributes {
    /**
    * Wether this option can be selected.
    */
    'disabled'?: boolean;
    'onWcsSelectOptionClick'?: (event: CustomEvent<SelectOptionChosedEvent>) => void;
    /**
    * Wether this option is selected.
    */
    'selected'?: boolean;
    /**
    * The option value, not what's displayed, use inner text instead.
    */
    'value'?: any | null;
  }

  interface WcsSelect {
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled': boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The currently selected value.
    */
    'value'?: any | null;
  }
  interface WcsSelectAttributes extends StencilHTMLAttributes {
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Emitted when the select loses focus.
    */
    'onWcsBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onWcsChange'?: (event: CustomEvent<SelectChangeEventDetail>) => void;
    /**
    * Emitted when the select has focus.
    */
    'onWcsFocus'?: (event: CustomEvent<void>) => void;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The currently selected value.
    */
    'value'?: any | null;
  }

  interface WcsSidebar {}
  interface WcsSidebarAttributes extends StencilHTMLAttributes {}

  interface WcsTab {
    /**
    * The header you want to be displayed for this tab.
    */
    'header': string;
    /**
    * This property should not be used, it is only meant for internal use.
    */
    'slot': string;
  }
  interface WcsTabAttributes extends StencilHTMLAttributes {
    /**
    * The header you want to be displayed for this tab.
    */
    'header'?: string;
  }

  interface WcsTabs {
    'align': WcsTabsAlignment;
    /**
    * Current selected tab index
    */
    'selectedIndex': number;
  }
  interface WcsTabsAttributes extends StencilHTMLAttributes {
    'align'?: WcsTabsAlignment;
    /**
    * Emitted when the selected tab change
    */
    'onWcsTabsChange'?: (event: CustomEvent<WcsTabsChangeEvent>) => void;
    /**
    * Current selected tab index
    */
    'selectedIndex'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcsApp': Components.WcsApp;
    'WcsBadge': Components.WcsBadge;
    'WcsButton': Components.WcsButton;
    'WcsCardBody': Components.WcsCardBody;
    'WcsCard': Components.WcsCard;
    'WcsCheckbox': Components.WcsCheckbox;
    'WcsHeader': Components.WcsHeader;
    'WcsIcon': Components.WcsIcon;
    'WcsInput': Components.WcsInput;
    'WcsProgressBar': Components.WcsProgressBar;
    'WcsProgressRadial': Components.WcsProgressRadial;
    'WcsSelectOption': Components.WcsSelectOption;
    'WcsSelect': Components.WcsSelect;
    'WcsSidebar': Components.WcsSidebar;
    'WcsTab': Components.WcsTab;
    'WcsTabs': Components.WcsTabs;
  }

  interface StencilIntrinsicElements {
    'wcs-app': Components.WcsAppAttributes;
    'wcs-badge': Components.WcsBadgeAttributes;
    'wcs-button': Components.WcsButtonAttributes;
    'wcs-card-body': Components.WcsCardBodyAttributes;
    'wcs-card': Components.WcsCardAttributes;
    'wcs-checkbox': Components.WcsCheckboxAttributes;
    'wcs-header': Components.WcsHeaderAttributes;
    'wcs-icon': Components.WcsIconAttributes;
    'wcs-input': Components.WcsInputAttributes;
    'wcs-progress-bar': Components.WcsProgressBarAttributes;
    'wcs-progress-radial': Components.WcsProgressRadialAttributes;
    'wcs-select-option': Components.WcsSelectOptionAttributes;
    'wcs-select': Components.WcsSelectAttributes;
    'wcs-sidebar': Components.WcsSidebarAttributes;
    'wcs-tab': Components.WcsTabAttributes;
    'wcs-tabs': Components.WcsTabsAttributes;
  }


  interface HTMLWcsAppElement extends Components.WcsApp, HTMLStencilElement {}
  var HTMLWcsAppElement: {
    prototype: HTMLWcsAppElement;
    new (): HTMLWcsAppElement;
  };

  interface HTMLWcsBadgeElement extends Components.WcsBadge, HTMLStencilElement {}
  var HTMLWcsBadgeElement: {
    prototype: HTMLWcsBadgeElement;
    new (): HTMLWcsBadgeElement;
  };

  interface HTMLWcsButtonElement extends Components.WcsButton, HTMLStencilElement {}
  var HTMLWcsButtonElement: {
    prototype: HTMLWcsButtonElement;
    new (): HTMLWcsButtonElement;
  };

  interface HTMLWcsCardBodyElement extends Components.WcsCardBody, HTMLStencilElement {}
  var HTMLWcsCardBodyElement: {
    prototype: HTMLWcsCardBodyElement;
    new (): HTMLWcsCardBodyElement;
  };

  interface HTMLWcsCardElement extends Components.WcsCard, HTMLStencilElement {}
  var HTMLWcsCardElement: {
    prototype: HTMLWcsCardElement;
    new (): HTMLWcsCardElement;
  };

  interface HTMLWcsCheckboxElement extends Components.WcsCheckbox, HTMLStencilElement {}
  var HTMLWcsCheckboxElement: {
    prototype: HTMLWcsCheckboxElement;
    new (): HTMLWcsCheckboxElement;
  };

  interface HTMLWcsHeaderElement extends Components.WcsHeader, HTMLStencilElement {}
  var HTMLWcsHeaderElement: {
    prototype: HTMLWcsHeaderElement;
    new (): HTMLWcsHeaderElement;
  };

  interface HTMLWcsIconElement extends Components.WcsIcon, HTMLStencilElement {}
  var HTMLWcsIconElement: {
    prototype: HTMLWcsIconElement;
    new (): HTMLWcsIconElement;
  };

  interface HTMLWcsInputElement extends Components.WcsInput, HTMLStencilElement {}
  var HTMLWcsInputElement: {
    prototype: HTMLWcsInputElement;
    new (): HTMLWcsInputElement;
  };

  interface HTMLWcsProgressBarElement extends Components.WcsProgressBar, HTMLStencilElement {}
  var HTMLWcsProgressBarElement: {
    prototype: HTMLWcsProgressBarElement;
    new (): HTMLWcsProgressBarElement;
  };

  interface HTMLWcsProgressRadialElement extends Components.WcsProgressRadial, HTMLStencilElement {}
  var HTMLWcsProgressRadialElement: {
    prototype: HTMLWcsProgressRadialElement;
    new (): HTMLWcsProgressRadialElement;
  };

  interface HTMLWcsSelectOptionElement extends Components.WcsSelectOption, HTMLStencilElement {}
  var HTMLWcsSelectOptionElement: {
    prototype: HTMLWcsSelectOptionElement;
    new (): HTMLWcsSelectOptionElement;
  };

  interface HTMLWcsSelectElement extends Components.WcsSelect, HTMLStencilElement {}
  var HTMLWcsSelectElement: {
    prototype: HTMLWcsSelectElement;
    new (): HTMLWcsSelectElement;
  };

  interface HTMLWcsSidebarElement extends Components.WcsSidebar, HTMLStencilElement {}
  var HTMLWcsSidebarElement: {
    prototype: HTMLWcsSidebarElement;
    new (): HTMLWcsSidebarElement;
  };

  interface HTMLWcsTabElement extends Components.WcsTab, HTMLStencilElement {}
  var HTMLWcsTabElement: {
    prototype: HTMLWcsTabElement;
    new (): HTMLWcsTabElement;
  };

  interface HTMLWcsTabsElement extends Components.WcsTabs, HTMLStencilElement {}
  var HTMLWcsTabsElement: {
    prototype: HTMLWcsTabsElement;
    new (): HTMLWcsTabsElement;
  };

  interface HTMLElementTagNameMap {
    'wcs-app': HTMLWcsAppElement
    'wcs-badge': HTMLWcsBadgeElement
    'wcs-button': HTMLWcsButtonElement
    'wcs-card-body': HTMLWcsCardBodyElement
    'wcs-card': HTMLWcsCardElement
    'wcs-checkbox': HTMLWcsCheckboxElement
    'wcs-header': HTMLWcsHeaderElement
    'wcs-icon': HTMLWcsIconElement
    'wcs-input': HTMLWcsInputElement
    'wcs-progress-bar': HTMLWcsProgressBarElement
    'wcs-progress-radial': HTMLWcsProgressRadialElement
    'wcs-select-option': HTMLWcsSelectOptionElement
    'wcs-select': HTMLWcsSelectElement
    'wcs-sidebar': HTMLWcsSidebarElement
    'wcs-tab': HTMLWcsTabElement
    'wcs-tabs': HTMLWcsTabsElement
  }

  interface ElementTagNameMap {
    'wcs-app': HTMLWcsAppElement;
    'wcs-badge': HTMLWcsBadgeElement;
    'wcs-button': HTMLWcsButtonElement;
    'wcs-card-body': HTMLWcsCardBodyElement;
    'wcs-card': HTMLWcsCardElement;
    'wcs-checkbox': HTMLWcsCheckboxElement;
    'wcs-header': HTMLWcsHeaderElement;
    'wcs-icon': HTMLWcsIconElement;
    'wcs-input': HTMLWcsInputElement;
    'wcs-progress-bar': HTMLWcsProgressBarElement;
    'wcs-progress-radial': HTMLWcsProgressRadialElement;
    'wcs-select-option': HTMLWcsSelectOptionElement;
    'wcs-select': HTMLWcsSelectElement;
    'wcs-sidebar': HTMLWcsSidebarElement;
    'wcs-tab': HTMLWcsTabElement;
    'wcs-tabs': HTMLWcsTabsElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
