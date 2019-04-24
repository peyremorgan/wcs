import { h } from '../wcs.core.js';

import { a as MDCRipple } from './chunk-9b5bd194.js';

const SelectArrow = ({ up }) => (h("svg", { style: { marginLeft: 'auto' }, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    h("style", { type: "text/css" }, `
            .arrow-group {
                transform-origin: 50% 50%;
                transition: transform 175ms ease-in-out;
            }
            .up {
                transform: scaleY(1);
            }
            .down {
                transform: scaleY(-1);
            }
        `),
    h("g", { fill: "none", class: (up ? 'up' : 'down') + ' arrow-group' },
        h("path", { class: "arrow", fill: "black", d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
        h("path", { d: "M0 0h24v24H0z", fill: "none" }))));

class Select {
    constructor() {
        this.expanded = false;
        this.hasLoaded = false;
        this.disabled = false;
        this.handleExpandedKeyEvents = (keyEvent) => {
            if (keyEvent.code === 'Escape') {
                this.unExpand();
            }
            else if (keyEvent.code === 'Tab') {
                this.unExpand();
                keyEvent.preventDefault();
            }
            else if (keyEvent.code === 'ArrowDown') {
                keyEvent.preventDefault();
            }
            else if (keyEvent.code === 'ArrowUp') {
                keyEvent.preventDefault();
            }
        };
        this.focus = () => {
            this.wrapperEl.focus();
            this.wcsFocus.emit();
            this.wrapperEl.addEventListener('keydown', this.handleFocusedKeyEvents);
        };
        this.handleFocusedKeyEvents = (keyEvent) => {
            if (keyEvent.code === 'Escape') {
                this.blur();
            }
            else if (keyEvent.code === 'Space') {
                this.expand();
                keyEvent.preventDefault();
                this.wrapperEl.removeEventListener('keydown', this.handleFocusedKeyEvents);
            }
        };
        this.blur = () => {
            this.wrapperEl.blur();
            this.wcsBlur.emit();
            this.wrapperEl.removeEventListener('keydown', this.handleFocusedKeyEvents);
        };
    }
    componentDidLoad() {
        this.optionsEl = this.el.shadowRoot.querySelector('.wcs-select-options');
        this.contentEl = this.el.shadowRoot.querySelector('.wcs-select-content');
        this.wrapperEl = this.el.shadowRoot.querySelector('.wcs-select-wrapper');
        this.expandOnClick();
        this.addRippleEffect();
        this.wrapperEl.addEventListener('focus', this.focus);
        this.wrapperEl.addEventListener('blur', this.blur);
        this.hasLoaded = true;
    }
    componentDidUnload() {
        this.window.removeEventListener('keydown', this.handleExpandedKeyEvents);
        this.wrapperEl.removeEventListener('focus', this.focus);
        this.wrapperEl.addEventListener('blur', this.blur);
    }
    expandOnClick() {
        this.el.addEventListener('mousedown', () => {
            if (!this.disabled) {
                if (this.expanded) {
                    this.unExpand();
                }
                else {
                    this.expand();
                }
            }
        });
    }
    expand() {
        this.window.addEventListener('keydown', this.handleExpandedKeyEvents);
        this.expanded = true;
    }
    unExpand() {
        this.expanded = false;
        this.window.removeEventListener('keydown', this.handleExpandedKeyEvents);
    }
    addRippleEffect() {
        const ripple = new MDCRipple.MDCRipple(this.contentEl);
        ripple.unbound = true;
    }
    onWindowClickEvent(event) {
        if (this.expanded
            && event.target !== this.el) {
            this.unExpand();
        }
    }
    selectedOptionChanged(event) {
        this.value = event.detail.value;
        this.displayText = event.detail.displayText;
        this.wcsChange.emit({ value: event.detail.value });
    }
    wrapperClasses() {
        return (this.expanded ? 'expanded ' : '')
            + (this.hasValue ? ' has-value ' : '')
            + (this.disabled ? ' disabled ' : '')
            + 'wcs-select-wrapper';
    }
    get hasValue() {
        return this.displayText !== undefined;
    }
    updateStyles() {
        const padding = 1.25;
        const borderSize = 1;
        this.optionsEl.setAttribute('style', `width: calc(${Math.ceil(this.el.getBoundingClientRect().width)}px - ${2 * padding}rem - ${2 * borderSize}px);`);
        this.setMarginTopOnNotFirstOption();
    }
    focusedAttributes() {
        return !this.disabled ? { tabIndex: 0 } : {};
    }
    setMarginTopOnNotFirstOption() {
        this.optionsEl.querySelector('slot')
            .assignedElements()
            .forEach((opt, key) => {
            if (key !== 0) {
                opt.setAttribute('style', `margin-top: 0.875rem;`);
            }
        });
    }
    render() {
        if (this.hasLoaded) {
            this.updateStyles();
        }
        return (h("div", Object.assign({ class: this.wrapperClasses() }, this.focusedAttributes()),
            h("div", { class: "wcs-select-content" },
                h("label", { class: "wcs-select-text" }, this.hasValue
                    ? this.displayText
                    : this.placeholder),
                h(SelectArrow, { up: this.expanded })),
            h("div", { class: "wcs-select-options" },
                h("slot", { name: "wcs-select-option" }))));
    }
    static get is() { return "wcs-select"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "displayText": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "expanded": {
            "state": true
        },
        "focused": {
            "state": true
        },
        "hasLoaded": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder",
            "mutable": true
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true
        },
        "window": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "wcsChange",
            "method": "wcsChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "wcsFocus",
            "method": "wcsFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "wcsBlur",
            "method": "wcsBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "window:click",
            "method": "onWindowClickEvent"
        }, {
            "name": "wcsSelectOptionClick",
            "method": "selectedOptionChanged"
        }]; }
    static get style() { return ".wcs-background-primary.sc-wcs-select{background-color:#0088ce}.wcs-color-primary.sc-wcs-select{color:#fff}.wcs-background-primary-hover.sc-wcs-select{background-color:#0088ce}.wcs-background-primary-hover.sc-wcs-select:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary.sc-wcs-select{background-color:#4d4f53}.wcs-color-secondary.sc-wcs-select{color:#fff}.wcs-background-secondary-hover.sc-wcs-select{background-color:#4d4f53}.wcs-background-secondary-hover.sc-wcs-select:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success.sc-wcs-select{background-color:#82be00}.wcs-color-success.sc-wcs-select{color:#212529}.wcs-background-success-hover.sc-wcs-select{background-color:#82be00}.wcs-background-success-hover.sc-wcs-select:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info.sc-wcs-select{background-color:#009aa6}.wcs-color-info.sc-wcs-select{color:#fff}.wcs-background-info-hover.sc-wcs-select{background-color:#009aa6}.wcs-background-info-hover.sc-wcs-select:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger.sc-wcs-select{background-color:#cd0037}.wcs-color-danger.sc-wcs-select{color:#fff}.wcs-background-danger-hover.sc-wcs-select{background-color:#cd0037}.wcs-background-danger-hover.sc-wcs-select:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning.sc-wcs-select{background-color:#ffb612}.wcs-color-warning.sc-wcs-select{color:#212529}.wcs-background-warning-hover.sc-wcs-select{background-color:#ffb612}.wcs-background-warning-hover.sc-wcs-select:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light.sc-wcs-select{background-color:#f2f2f2}.wcs-color-light.sc-wcs-select{color:#212529}.wcs-background-light-hover.sc-wcs-select{background-color:#f2f2f2}.wcs-background-light-hover.sc-wcs-select:hover{background-color:#fff;border-color:#fff}.wcs-background-dark.sc-wcs-select{background-color:#343a40}.wcs-color-dark.sc-wcs-select{color:#fff}.wcs-background-dark-hover.sc-wcs-select{background-color:#343a40}.wcs-background-dark-hover.sc-wcs-select:hover{background-color:#454d55;border-color:#4b545c}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug.sc-wcs-select{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug.sc-wcs-select:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface.sc-wcs-select{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface.sc-wcs-select:after, .mdc-ripple-surface.sc-wcs-select:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface.sc-wcs-select:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded.sc-wcs-select:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded.sc-wcs-select:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded.sc-wcs-select:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation.sc-wcs-select:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation.sc-wcs-select:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.sc-wcs-select:after, .mdc-ripple-surface.sc-wcs-select:before{background-color:#000}.mdc-ripple-surface.sc-wcs-select:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused.sc-wcs-select:before, .mdc-ripple-surface.sc-wcs-select:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface.sc-wcs-select:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface.sc-wcs-select:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface.mdc-ripple-upgraded.sc-wcs-select{--mdc-ripple-fg-opacity:0.16}.mdc-ripple-surface.sc-wcs-select:after, .mdc-ripple-surface.sc-wcs-select:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded.sc-wcs-select:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].sc-wcs-select{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].sc-wcs-select:after, .mdc-ripple-surface[data-mdc-ripple-is-unbounded].sc-wcs-select:before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded.sc-wcs-select:after, .mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded.sc-wcs-select:before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded.sc-wcs-select:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary.sc-wcs-select:after, .mdc-ripple-surface--primary.sc-wcs-select:before{background-color:#6200ee}\@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary.sc-wcs-select:after, .mdc-ripple-surface--primary.sc-wcs-select:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-ripple-surface--primary.sc-wcs-select:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused.sc-wcs-select:before, .mdc-ripple-surface--primary.sc-wcs-select:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.sc-wcs-select:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface--primary.sc-wcs-select:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface--primary.mdc-ripple-upgraded.sc-wcs-select{--mdc-ripple-fg-opacity:0.16}.mdc-ripple-surface--accent.sc-wcs-select:after, .mdc-ripple-surface--accent.sc-wcs-select:before{background-color:#018786}\@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent.sc-wcs-select:after, .mdc-ripple-surface--accent.sc-wcs-select:before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-ripple-surface--accent.sc-wcs-select:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused.sc-wcs-select:before, .mdc-ripple-surface--accent.sc-wcs-select:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.sc-wcs-select:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface--accent.sc-wcs-select:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface--accent.mdc-ripple-upgraded.sc-wcs-select{--mdc-ripple-fg-opacity:0.16}.wcs-select-text.sc-wcs-select{padding:.65625rem 1.25rem;font-weight:500;cursor:pointer;color:#747678;-webkit-transition:color 175ms ease-in-out;transition:color 175ms ease-in-out}.wcs-select-content.sc-wcs-select{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:var(--wcs-text-padding);background-color:#f2f2f2;border-radius:var(--wcs-border-radius);border:1px solid transparent;font-size:1rem;line-height:1.5;cursor:pointer}.wcs-select-content.sc-wcs-select:after, .wcs-select-content.sc-wcs-select:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.wcs-select-content.sc-wcs-select:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.wcs-select-content.mdc-ripple-upgraded.sc-wcs-select:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.wcs-select-content.mdc-ripple-upgraded.sc-wcs-select:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.wcs-select-content.mdc-ripple-upgraded--unbounded.sc-wcs-select:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.wcs-select-content.mdc-ripple-upgraded--foreground-activation.sc-wcs-select:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.wcs-select-content.mdc-ripple-upgraded--foreground-deactivation.sc-wcs-select:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.wcs-select-content.sc-wcs-select:after, .wcs-select-content.sc-wcs-select:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.wcs-select-content.mdc-ripple-upgraded.sc-wcs-select:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.wcs-select-content.sc-wcs-select:after, .wcs-select-content.sc-wcs-select:before{background-color:#999}.wcs-select-content.sc-wcs-select:hover:before{opacity:.1}.wcs-select-content.mdc-ripple-upgraded--background-focused.sc-wcs-select:before, .wcs-select-content.sc-wcs-select:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}.wcs-select-content.sc-wcs-select:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.wcs-select-content.sc-wcs-select:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.3}.wcs-select-content.mdc-ripple-upgraded.sc-wcs-select{--mdc-ripple-fg-opacity:0.3}.wcs-select-content.sc-wcs-select:hover{border:1px solid #d7d7d7}.wcs-select-options.sc-wcs-select{display:none;position:absolute;z-index:1;padding:var(--wcs-padding);margin:0;max-height:22.5rem;overflow-y:auto;background-color:#fff;color:#747678;border-left:1px solid #d7d7d7;border-right:1px solid #d7d7d7;border-bottom:1px solid #d7d7d7;border-bottom-right-radius:var(--wcs-border-radius);border-bottom-left-radius:var(--wcs-border-radius)}.expanded.sc-wcs-select   .wcs-select-options.sc-wcs-select{display:block}.expanded.sc-wcs-select   .wcs-select-content.sc-wcs-select{border-top:1px solid #d7d7d7;border-right:1px solid #d7d7d7;border-left:1px solid #d7d7d7;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid transparent}.wcs-select-wrapper.sc-wcs-select{position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wcs-select-wrapper.sc-wcs-select:not(.expanded):focus   .wcs-select-content.sc-wcs-select{border:1px solid #0088ce}.has-value.sc-wcs-select   .wcs-select-text.sc-wcs-select{color:#0088ce}.disabled.sc-wcs-select   .wcs-select-content.sc-wcs-select, .disabled.sc-wcs-select   .wcs-select-text.sc-wcs-select{cursor:default;pointer-events:none}.disabled.sc-wcs-select   .wcs-select-text.sc-wcs-select{color:#b9b9b9}.disabled.sc-wcs-select   .arrow.sc-wcs-select{fill:#747678}.wcs-select-options.sc-wcs-select-s > wcs-select-option>[value=\"1\"]{display:none}"; }
}

export { Select as WcsSelect };
