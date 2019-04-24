import{h}from"../wcs.core.js";var Sidebar=function(){function e(){}return e.prototype.hostData=function(){return{slot:"sidebar"}},e.prototype.render=function(){return h("nav",null,h("slot",{name:"link"}))},Object.defineProperty(e,"is",{get:function(){return"wcs-sidebar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".wcs-background-primary{background-color:#0088ce}.wcs-color-primary{color:#fff}.wcs-background-primary-hover{background-color:#0088ce}.wcs-background-primary-hover:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary{background-color:#4d4f53}.wcs-color-secondary{color:#fff}.wcs-background-secondary-hover{background-color:#4d4f53}.wcs-background-secondary-hover:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success{background-color:#82be00}.wcs-color-success{color:#212529}.wcs-background-success-hover{background-color:#82be00}.wcs-background-success-hover:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info{background-color:#009aa6}.wcs-color-info{color:#fff}.wcs-background-info-hover{background-color:#009aa6}.wcs-background-info-hover:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger{background-color:#cd0037}.wcs-color-danger{color:#fff}.wcs-background-danger-hover{background-color:#cd0037}.wcs-background-danger-hover:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning{background-color:#ffb612}.wcs-color-warning{color:#212529}.wcs-background-warning-hover{background-color:#ffb612}.wcs-background-warning-hover:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light{background-color:#f2f2f2}.wcs-color-light{color:#212529}.wcs-background-light-hover{background-color:#f2f2f2}.wcs-background-light-hover:hover{background-color:#fff;border-color:#fff}.wcs-background-dark{background-color:#343a40}.wcs-color-dark{color:#fff}.wcs-background-dark-hover{background-color:#343a40}.wcs-background-dark-hover:hover{background-color:#454d55;border-color:#4b545c}nav{z-index:2;background:#0088ce;height:calc(100% - 2.5rem);padding:1rem 1.5rem;position:-webkit-sticky;position:sticky;top:64px;overflow-y:auto}::slotted(a){color:#fff;text-decoration:none;display:block;padding:.25rem}"},enumerable:!0,configurable:!0}),e}();export{Sidebar as WcsSidebar};