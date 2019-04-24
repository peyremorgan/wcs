import{h}from"../wcs.core.js";import{a as MDCRipple}from"./chunk-9b5bd194.js";var SelectArrow=function(e){var t=e.up;return h("svg",{style:{marginLeft:"auto"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},h("style",{type:"text/css"},"\n            .arrow-group {\n                transform-origin: 50% 50%;\n                transition: transform 175ms ease-in-out;\n            }\n            .up {\n                transform: scaleY(1);\n            }\n            .down {\n                transform: scaleY(-1);\n            }\n        "),h("g",{fill:"none",class:(t?"up":"down")+" arrow-group"},h("path",{class:"arrow",fill:"black",d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),h("path",{d:"M0 0h24v24H0z",fill:"none"})))},Select=function(){function e(){var e=this;this.expanded=!1,this.hasLoaded=!1,this.disabled=!1,this.handleExpandedKeyEvents=function(t){"Escape"===t.code?e.unExpand():"Tab"===t.code?(e.unExpand(),t.preventDefault()):"ArrowDown"===t.code?t.preventDefault():"ArrowUp"===t.code&&t.preventDefault()},this.focus=function(){e.wrapperEl.focus(),e.wcsFocus.emit(),e.wrapperEl.addEventListener("keydown",e.handleFocusedKeyEvents)},this.handleFocusedKeyEvents=function(t){"Escape"===t.code?e.blur():"Space"===t.code&&(e.expand(),t.preventDefault(),e.wrapperEl.removeEventListener("keydown",e.handleFocusedKeyEvents))},this.blur=function(){e.wrapperEl.blur(),e.wcsBlur.emit(),e.wrapperEl.removeEventListener("keydown",e.handleFocusedKeyEvents)}}return e.prototype.componentDidLoad=function(){this.optionsEl=this.el.shadowRoot.querySelector(".wcs-select-options"),this.contentEl=this.el.shadowRoot.querySelector(".wcs-select-content"),this.wrapperEl=this.el.shadowRoot.querySelector(".wcs-select-wrapper"),this.expandOnClick(),this.addRippleEffect(),this.wrapperEl.addEventListener("focus",this.focus),this.wrapperEl.addEventListener("blur",this.blur),this.hasLoaded=!0},e.prototype.componentDidUnload=function(){this.window.removeEventListener("keydown",this.handleExpandedKeyEvents),this.wrapperEl.removeEventListener("focus",this.focus),this.wrapperEl.addEventListener("blur",this.blur)},e.prototype.expandOnClick=function(){var e=this;this.el.addEventListener("mousedown",function(){e.disabled||(e.expanded?e.unExpand():e.expand())})},e.prototype.expand=function(){this.window.addEventListener("keydown",this.handleExpandedKeyEvents),this.expanded=!0},e.prototype.unExpand=function(){this.expanded=!1,this.window.removeEventListener("keydown",this.handleExpandedKeyEvents)},e.prototype.addRippleEffect=function(){new MDCRipple.MDCRipple(this.contentEl).unbound=!0},e.prototype.onWindowClickEvent=function(e){this.expanded&&e.target!==this.el&&this.unExpand()},e.prototype.selectedOptionChanged=function(e){this.value=e.detail.value,this.displayText=e.detail.displayText,this.wcsChange.emit({value:e.detail.value})},e.prototype.wrapperClasses=function(){return(this.expanded?"expanded ":"")+(this.hasValue?" has-value ":"")+(this.disabled?" disabled ":"")+"wcs-select-wrapper"},Object.defineProperty(e.prototype,"hasValue",{get:function(){return void 0!==this.displayText},enumerable:!0,configurable:!0}),e.prototype.updateStyles=function(){this.optionsEl.setAttribute("style","width: calc("+Math.ceil(this.el.getBoundingClientRect().width)+"px - 2.5rem - 2px);"),this.setMarginTopOnNotFirstOption()},e.prototype.focusedAttributes=function(){return this.disabled?{}:{tabIndex:0}},e.prototype.setMarginTopOnNotFirstOption=function(){this.optionsEl.querySelector("slot").assignedElements().forEach(function(e,t){0!==t&&e.setAttribute("style","margin-top: 0.875rem;")})},e.prototype.render=function(){return this.hasLoaded&&this.updateStyles(),h("div",Object.assign({class:this.wrapperClasses()},this.focusedAttributes()),h("div",{class:"wcs-select-content"},h("label",{class:"wcs-select-text"},this.hasValue?this.displayText:this.placeholder),h(SelectArrow,{up:this.expanded})),h("div",{class:"wcs-select-options"},h("slot",{name:"wcs-select-option"})))},Object.defineProperty(e,"is",{get:function(){return"wcs-select"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},displayText:{state:!0},el:{elementRef:!0},expanded:{state:!0},focused:{state:!0},hasLoaded:{state:!0},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder",mutable:!0},value:{type:"Any",attr:"value",mutable:!0},window:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wcsChange",method:"wcsChange",bubbles:!0,cancelable:!0,composed:!0},{name:"wcsFocus",method:"wcsFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"wcsBlur",method:"wcsBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:click",method:"onWindowClickEvent"},{name:"wcsSelectOptionClick",method:"selectedOptionChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".wcs-background-primary{background-color:#0088ce}.wcs-color-primary{color:#fff}.wcs-background-primary-hover{background-color:#0088ce}.wcs-background-primary-hover:hover{background-color:#00a1f4;border-color:#02a9ff}.wcs-background-secondary{background-color:#4d4f53}.wcs-color-secondary{color:#fff}.wcs-background-secondary-hover{background-color:#4d4f53}.wcs-background-secondary-hover:hover{background-color:#5f6267;border-color:#66686d}.wcs-background-success{background-color:#82be00}.wcs-color-success{color:#212529}.wcs-background-success-hover{background-color:#82be00}.wcs-background-success-hover:hover{background-color:#9ce400;border-color:#a5f100}.wcs-background-info{background-color:#009aa6}.wcs-color-info{color:#fff}.wcs-background-info-hover{background-color:#009aa6}.wcs-background-info-hover:hover{background-color:#00bdcc;border-color:#00c9d9}.wcs-background-danger{background-color:#cd0037}.wcs-color-danger{color:#fff}.wcs-background-danger-hover{background-color:#cd0037}.wcs-background-danger-hover:hover{background-color:#f30041;border-color:#ff0145}.wcs-background-warning{background-color:#ffb612}.wcs-color-warning{color:#212529}.wcs-background-warning-hover{background-color:#ffb612}.wcs-background-warning-hover:hover{background-color:#ffc238;border-color:#ffc645}.wcs-background-light{background-color:#f2f2f2}.wcs-color-light{color:#212529}.wcs-background-light-hover{background-color:#f2f2f2}.wcs-background-light-hover:hover{background-color:#fff;border-color:#fff}.wcs-background-dark{background-color:#343a40}.wcs-color-dark{color:#fff}.wcs-background-dark-hover{background-color:#343a40}.wcs-background-dark-hover:hover{background-color:#454d55;border-color:#4b545c}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#6200ee}\@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#018786}\@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.wcs-select-text{padding:.65625rem 1.25rem;font-weight:500;cursor:pointer;color:#747678;-webkit-transition:color 175ms ease-in-out;transition:color 175ms ease-in-out}.wcs-select-content{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:var(--wcs-text-padding);background-color:#f2f2f2;border-radius:var(--wcs-border-radius);border:1px solid transparent;font-size:1rem;line-height:1.5;cursor:pointer}.wcs-select-content:after,.wcs-select-content:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.wcs-select-content:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.wcs-select-content.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.wcs-select-content.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.wcs-select-content.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.wcs-select-content.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.wcs-select-content.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.wcs-select-content:after,.wcs-select-content:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.wcs-select-content.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.wcs-select-content:after,.wcs-select-content:before{background-color:#999}.wcs-select-content:hover:before{opacity:.1}.wcs-select-content.mdc-ripple-upgraded--background-focused:before,.wcs-select-content:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.2}.wcs-select-content:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.wcs-select-content:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.3}.wcs-select-content.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.3}.wcs-select-content:hover{border:1px solid #d7d7d7}.wcs-select-options{display:none;position:absolute;z-index:1;padding:var(--wcs-padding);margin:0;max-height:22.5rem;overflow-y:auto;background-color:#fff;color:#747678;border-left:1px solid #d7d7d7;border-right:1px solid #d7d7d7;border-bottom:1px solid #d7d7d7;border-bottom-right-radius:var(--wcs-border-radius);border-bottom-left-radius:var(--wcs-border-radius)}.expanded .wcs-select-options{display:block}.expanded .wcs-select-content{border-top:1px solid #d7d7d7;border-right:1px solid #d7d7d7;border-left:1px solid #d7d7d7;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid transparent}.wcs-select-wrapper{position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.wcs-select-wrapper:not(.expanded):focus .wcs-select-content{border:1px solid #0088ce}.has-value .wcs-select-text{color:#0088ce}.disabled .wcs-select-content,.disabled .wcs-select-text{cursor:default;pointer-events:none}.disabled .wcs-select-text{color:#b9b9b9}.disabled .arrow{fill:#747678}.wcs-select-options::slotted(wcs-select-option)>[value=\"1\"]{display:none}"},enumerable:!0,configurable:!0}),e}();export{Select as WcsSelect};