import{h}from"../wcs.core.js";var Badge=function(){function e(){this.color="primary"}return e.prototype.createColorClass=function(e){var r;return(r={})["wcs-background-"+e]=!0,r["wcs-color-"+e]=!0,r},e.prototype.hostData=function(){return{class:Object.assign({},this.createColorClass(this.color))}},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"wcs-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-wcs-badge-h{display:inline-block;padding:.313rem 1.5rem;font-size:.875rem;font-weight:500;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.75rem}"},enumerable:!0,configurable:!0}),e}();export{Badge as WcsBadge};