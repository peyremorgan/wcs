wcs.loadBundle("dtvohqm6",["exports"],function(e){var n=window.wcs.h,t=function(){function e(){}return e.prototype.componentDidLoad=function(){this.el.shadowRoot.querySelector('slot[name="content"]').assignedElements()[0].addEventListener("onscroll",function(e){console.log(e)})},e.prototype.render=function(){return[n("slot",{name:"header"}),n("slot",{name:"sidebar"}),n("slot",{name:"content"})]},Object.defineProperty(e,"is",{get:function(){return"wcs-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-wcs-app-h{background-color:#f2f2f2;margin:0;display:grid;grid-template-areas:\"header header\" \"sidebar content\";grid-template-columns:-webkit-min-content auto;grid-template-columns:min-content auto;overflow-y:hidden}.sc-wcs-app-s > main{padding:8px;grid-area:content;overflow-y:scroll;height:calc(100vh - 64px)}.sc-wcs-app-s > wcs-header{grid-area:header}\@media screen and (max-width:768px){.sc-wcs-app-h{grid-template-areas:\"header\" \"sidebar\" \"content\";grid-template-columns:auto}.sc-wcs-app-s > header{position:relative}.sc-wcs-app-s > main{overflow-y:visible;height:auto}}"},enumerable:!0,configurable:!0}),e}();e.WcsApp=t,Object.defineProperty(e,"__esModule",{value:!0})});