const e=window.wcs.h;class t{componentDidLoad(){this.el.shadowRoot.querySelector('slot[name="content"]').assignedElements()[0].addEventListener("onscroll",e=>{console.log(e)})}render(){return[e("slot",{name:"header"}),e("slot",{name:"sidebar"}),e("slot",{name:"content"})]}static get is(){return"wcs-app"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0}}}static get style(){return":host{background-color:#f2f2f2;margin:0;display:grid;grid-template-areas:\"header header\" \"sidebar content\";grid-template-columns:-webkit-min-content auto;grid-template-columns:min-content auto;overflow-y:hidden}::slotted(main){padding:8px;grid-area:content;overflow-y:scroll;height:calc(100vh - 64px)}::slotted(wcs-header){grid-area:header}\@media screen and (max-width:768px){:host{grid-template-areas:\"header\" \"sidebar\" \"content\";grid-template-columns:auto}::slotted(header){position:relative}::slotted(main){overflow-y:visible;height:auto}}"}}export{t as WcsApp};