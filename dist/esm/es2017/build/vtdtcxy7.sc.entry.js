import { h } from '../wcs.core.js';

class SelectOption {
    constructor() {
        this.disabled = false;
        this.selected = false;
        this.slot = 'wcs-select-option';
    }
    componentWillLoad() {
        if (this.value === undefined) {
            this.value = this.el.textContent || '';
        }
    }
    componentDidLoad() {
        this.addClickEventListener();
    }
    addClickEventListener() {
        this.el.addEventListener('mousedown', () => {
            if (!this.disabled) {
                const displayText = this.el.getElementsByClassName('wcs-selection-option-container')[0].innerHTML;
                this.wcsSelectOptionClick.emit({
                    value: this.value,
                    displayText
                });
            }
        });
    }
    render() {
        const wrapperClasses = (this.disabled ? 'disabled ' : '') +
            (this.selected ? 'selected ' : '');
        return (h("div", { class: wrapperClasses + 'wcs-selection-option-container' },
            h("slot", null)));
    }
    static get is() { return "wcs-select-option"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "selected": {
            "type": Boolean,
            "attr": "selected",
            "mutable": true
        },
        "slot": {
            "type": String,
            "attr": "slot",
            "reflectToAttr": true
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "wcsSelectOptionClick",
            "method": "wcsSelectOptionClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".wcs-background-primary{background-color:#0088ce}.wcs-color-primary{color:#fff}.wcs-background-primary-hover{background-color:#0088ce}.wcs-background-primary-hover:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary{background-color:#4d4f53}.wcs-color-secondary{color:#fff}.wcs-background-secondary-hover{background-color:#4d4f53}.wcs-background-secondary-hover:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success{background-color:#82be00}.wcs-color-success{color:#212529}.wcs-background-success-hover{background-color:#82be00}.wcs-background-success-hover:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info{background-color:#009aa6}.wcs-color-info{color:#fff}.wcs-background-info-hover{background-color:#009aa6}.wcs-background-info-hover:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger{background-color:#cd0037}.wcs-color-danger{color:#fff}.wcs-background-danger-hover{background-color:#cd0037}.wcs-background-danger-hover:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning{background-color:#ffb612}.wcs-color-warning{color:#212529}.wcs-background-warning-hover{background-color:#ffb612}.wcs-background-warning-hover:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light{background-color:#f2f2f2}.wcs-color-light{color:#212529}.wcs-background-light-hover{background-color:#f2f2f2}.wcs-background-light-hover:hover{background-color:#fff;border-color:#fff}.wcs-background-dark{background-color:#343a40}.wcs-color-dark{color:#fff}.wcs-background-dark-hover{background-color:#343a40}.wcs-background-dark-hover:hover{background-color:#454d55;border-color:#4b545c}wcs-select-option{display:block}.wcs-selection-option-container{display:block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;color:#000}.wcs-selection-option-container.selected,.wcs-selection-option-container:hover{color:#0088ce}.disabled.wcs-selection-option-container{cursor:default;color:#b9b9b9}.selected{color:#0088ce}"; }
}

export { SelectOption as WcsSelectOption };
