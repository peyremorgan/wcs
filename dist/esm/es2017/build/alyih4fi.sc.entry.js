import { h } from '../wcs.core.js';

class Tabs {
    constructor() {
        this.align = 'start';
        this.selectedIndex = 0;
        this.headers = [];
        this.didLoad = false;
    }
    componentDidLoad() {
        this.tabsEl = this.el.shadowRoot.querySelector('.wcs-tabs');
        this.didLoad = true;
        this.refreshHeaders();
    }
    selectedIndexChanged() {
        this.wcsTabsChange.emit({
            tabName: this.headers[this.selectedIndex],
            tabIndex: this.selectedIndex
        });
    }
    refreshHeaders() {
        if (this.didLoad) {
            this.headers = this.tabsEl.querySelector('slot')
                .assignedElements()
                .map(x => x.getAttribute('header'));
        }
    }
    selectTab(index) {
        this.selectedIndex = index;
    }
    getHeaderAlignClass() {
        switch (this.align) {
            case 'start':
                return 'start';
            case 'end':
                return 'end';
            case 'center':
                return 'center';
        }
    }
    componentWillUpdate() {
        this.tabsEl.querySelector('slot').assignedElements().forEach((el, idx) => {
            if (idx !== this.selectedIndex) {
                el.setAttribute('style', 'display: none;');
            }
            else {
                el.setAttribute('style', 'display: initial;');
            }
        });
    }
    render() {
        return [
            h("ul", { class: 'wcs-tabs-headers ' + this.getHeaderAlignClass() }, this.headers.map((header, idx) => h("li", { class: 'wcs-tab-header ' + (this.selectedIndex === idx ? 'active' : ''), onClick: () => this.selectTab(idx) },
                h("span", null, header)))),
            h("div", { class: "wcs-tabs" },
                h("slot", { name: "wcs-tab" }))
        ];
    }
    static get is() { return "wcs-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align",
            "mutable": true
        },
        "el": {
            "elementRef": true
        },
        "headers": {
            "state": true
        },
        "selectedIndex": {
            "type": Number,
            "attr": "selected-index",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["selectedIndexChanged"]
        }
    }; }
    static get events() { return [{
            "name": "wcsTabsChange",
            "method": "wcsTabsChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "wcsTabDidLoad",
            "method": "refreshHeaders"
        }]; }
    static get style() { return ".wcs-background-primary.sc-wcs-tabs{background-color:#0088ce}.wcs-color-primary.sc-wcs-tabs{color:#fff}.wcs-background-primary-hover.sc-wcs-tabs{background-color:#0088ce}.wcs-background-primary-hover.sc-wcs-tabs:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary.sc-wcs-tabs{background-color:#4d4f53}.wcs-color-secondary.sc-wcs-tabs{color:#fff}.wcs-background-secondary-hover.sc-wcs-tabs{background-color:#4d4f53}.wcs-background-secondary-hover.sc-wcs-tabs:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success.sc-wcs-tabs{background-color:#82be00}.wcs-color-success.sc-wcs-tabs{color:#212529}.wcs-background-success-hover.sc-wcs-tabs{background-color:#82be00}.wcs-background-success-hover.sc-wcs-tabs:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info.sc-wcs-tabs{background-color:#009aa6}.wcs-color-info.sc-wcs-tabs{color:#fff}.wcs-background-info-hover.sc-wcs-tabs{background-color:#009aa6}.wcs-background-info-hover.sc-wcs-tabs:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger.sc-wcs-tabs{background-color:#cd0037}.wcs-color-danger.sc-wcs-tabs{color:#fff}.wcs-background-danger-hover.sc-wcs-tabs{background-color:#cd0037}.wcs-background-danger-hover.sc-wcs-tabs:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning.sc-wcs-tabs{background-color:#ffb612}.wcs-color-warning.sc-wcs-tabs{color:#212529}.wcs-background-warning-hover.sc-wcs-tabs{background-color:#ffb612}.wcs-background-warning-hover.sc-wcs-tabs:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light.sc-wcs-tabs{background-color:#f2f2f2}.wcs-color-light.sc-wcs-tabs{color:#212529}.wcs-background-light-hover.sc-wcs-tabs{background-color:#f2f2f2}.wcs-background-light-hover.sc-wcs-tabs:hover{background-color:#fff;border-color:#fff}.wcs-background-dark.sc-wcs-tabs{background-color:#343a40}.wcs-color-dark.sc-wcs-tabs{color:#fff}.wcs-background-dark-hover.sc-wcs-tabs{background-color:#343a40}.wcs-background-dark-hover.sc-wcs-tabs:hover{background-color:#454d55;border-color:#4b545c}.sc-wcs-tabs-h{margin-top:.5rem!important}.wcs-tabs-headers.sc-wcs-tabs{display:-ms-flexbox;display:flex;list-style:none;padding-left:0;border-bottom:var(--wcs-tabs-headers-border-bottom);margin:0;padding-bottom:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wcs-tabs-headers.center.sc-wcs-tabs{-ms-flex-pack:center;justify-content:center}.wcs-tabs-headers.end.sc-wcs-tabs{-ms-flex-pack:end;justify-content:end}.wcs-tabs-headers.start.sc-wcs-tabs{-ms-flex-pack:start;justify-content:start}.wcs-tab-header.sc-wcs-tabs{padding-right:1.5rem;cursor:pointer}.wcs-tab-header.sc-wcs-tabs   span.sc-wcs-tabs{color:#4d4f53;font-size:1rem;font-weight:400;line-height:1.375;padding-top:.25rem;padding-bottom:1rem}.active.sc-wcs-tabs   span.sc-wcs-tabs, .wcs-tab-header.sc-wcs-tabs:hover > span.sc-wcs-tabs{color:#0088ce}.active.sc-wcs-tabs   span.sc-wcs-tabs{font-weight:500;position:relative}.active.sc-wcs-tabs   span.sc-wcs-tabs:after{position:absolute;bottom:0;left:0;width:100%;height:.3125rem;content:\"\";background-color:#0088ce;border-radius:3px}"; }
}

export { Tabs as WcsTabs };
