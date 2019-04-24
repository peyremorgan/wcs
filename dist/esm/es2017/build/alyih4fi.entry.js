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
    static get style() { return ".wcs-background-primary{background-color:#0088ce}.wcs-color-primary{color:#fff}.wcs-background-primary-hover{background-color:#0088ce}.wcs-background-primary-hover:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary{background-color:#4d4f53}.wcs-color-secondary{color:#fff}.wcs-background-secondary-hover{background-color:#4d4f53}.wcs-background-secondary-hover:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success{background-color:#82be00}.wcs-color-success{color:#212529}.wcs-background-success-hover{background-color:#82be00}.wcs-background-success-hover:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info{background-color:#009aa6}.wcs-color-info{color:#fff}.wcs-background-info-hover{background-color:#009aa6}.wcs-background-info-hover:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger{background-color:#cd0037}.wcs-color-danger{color:#fff}.wcs-background-danger-hover{background-color:#cd0037}.wcs-background-danger-hover:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning{background-color:#ffb612}.wcs-color-warning{color:#212529}.wcs-background-warning-hover{background-color:#ffb612}.wcs-background-warning-hover:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light{background-color:#f2f2f2}.wcs-color-light{color:#212529}.wcs-background-light-hover{background-color:#f2f2f2}.wcs-background-light-hover:hover{background-color:#fff;border-color:#fff}.wcs-background-dark{background-color:#343a40}.wcs-color-dark{color:#fff}.wcs-background-dark-hover{background-color:#343a40}.wcs-background-dark-hover:hover{background-color:#454d55;border-color:#4b545c}:host{margin-top:.5rem!important}.wcs-tabs-headers{display:-ms-flexbox;display:flex;list-style:none;padding-left:0;border-bottom:var(--wcs-tabs-headers-border-bottom);margin:0;padding-bottom:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wcs-tabs-headers.center{-ms-flex-pack:center;justify-content:center}.wcs-tabs-headers.end{-ms-flex-pack:end;justify-content:end}.wcs-tabs-headers.start{-ms-flex-pack:start;justify-content:start}.wcs-tab-header{padding-right:1.5rem;cursor:pointer}.wcs-tab-header span{color:#4d4f53;font-size:1rem;font-weight:400;line-height:1.375;padding-top:.25rem;padding-bottom:1rem}.active span,.wcs-tab-header:hover>span{color:#0088ce}.active span{font-weight:500;position:relative}.active span:after{position:absolute;bottom:0;left:0;width:100%;height:.3125rem;content:\"\";background-color:#0088ce;border-radius:3px}"; }
}

export { Tabs as WcsTabs };
