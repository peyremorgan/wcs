import { h } from '../wcs.core.js';

class Sidebar {
    hostData() {
        return {
            'slot': 'sidebar'
        };
    }
    render() {
        return (h("nav", null,
            h("slot", { name: "link" })));
    }
    static get is() { return "wcs-sidebar"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".wcs-background-primary.sc-wcs-sidebar{background-color:#0088ce}.wcs-color-primary.sc-wcs-sidebar{color:#fff}.wcs-background-primary-hover.sc-wcs-sidebar{background-color:#0088ce}.wcs-background-primary-hover.sc-wcs-sidebar:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary.sc-wcs-sidebar{background-color:#4d4f53}.wcs-color-secondary.sc-wcs-sidebar{color:#fff}.wcs-background-secondary-hover.sc-wcs-sidebar{background-color:#4d4f53}.wcs-background-secondary-hover.sc-wcs-sidebar:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success.sc-wcs-sidebar{background-color:#82be00}.wcs-color-success.sc-wcs-sidebar{color:#212529}.wcs-background-success-hover.sc-wcs-sidebar{background-color:#82be00}.wcs-background-success-hover.sc-wcs-sidebar:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info.sc-wcs-sidebar{background-color:#009aa6}.wcs-color-info.sc-wcs-sidebar{color:#fff}.wcs-background-info-hover.sc-wcs-sidebar{background-color:#009aa6}.wcs-background-info-hover.sc-wcs-sidebar:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger.sc-wcs-sidebar{background-color:#cd0037}.wcs-color-danger.sc-wcs-sidebar{color:#fff}.wcs-background-danger-hover.sc-wcs-sidebar{background-color:#cd0037}.wcs-background-danger-hover.sc-wcs-sidebar:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning.sc-wcs-sidebar{background-color:#ffb612}.wcs-color-warning.sc-wcs-sidebar{color:#212529}.wcs-background-warning-hover.sc-wcs-sidebar{background-color:#ffb612}.wcs-background-warning-hover.sc-wcs-sidebar:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light.sc-wcs-sidebar{background-color:#f2f2f2}.wcs-color-light.sc-wcs-sidebar{color:#212529}.wcs-background-light-hover.sc-wcs-sidebar{background-color:#f2f2f2}.wcs-background-light-hover.sc-wcs-sidebar:hover{background-color:#fff;border-color:#fff}.wcs-background-dark.sc-wcs-sidebar{background-color:#343a40}.wcs-color-dark.sc-wcs-sidebar{color:#fff}.wcs-background-dark-hover.sc-wcs-sidebar{background-color:#343a40}.wcs-background-dark-hover.sc-wcs-sidebar:hover{background-color:#454d55;border-color:#4b545c}nav.sc-wcs-sidebar{z-index:2;background:#0088ce;height:calc(100% - 2.5rem);padding:1rem 1.5rem;position:-webkit-sticky;position:sticky;top:64px;overflow-y:auto}.sc-wcs-sidebar-s > a{color:#fff;text-decoration:none;display:block;padding:.25rem}"; }
}

export { Sidebar as WcsSidebar };
