import { Component, ComponentInterface, Element, h, Listen, Prop, Watch } from '@stencil/core';

import { MDCRipple } from '@material/ripple';

import { WcsButtonMode, WcsButtonShape, WcsButtonType } from './button-interface';
import { hasShadowDom } from '../../utils/helpers';

/**
 * Button component, can also be a link when specifying href.
 */
@Component({
    tag: 'wcs-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class Button implements ComponentInterface {
    @Element() el!: HTMLElement;

    /**
     * Specify the button type.
     */
    @Prop({ mutable: true }) type: WcsButtonType = 'button';

    /**
     * Set a URL to point to.
     * If specified use a `a` tag instead of `btn`.
     */
    @Prop() href?: string;

    /**
     * Specify wether the button is disabled or not.
     */
    @Prop({ reflect: true }) disabled = false;

    /**
     * Specify wether the button should have a ripple effect or not.
     */
    @Prop() ripple = true;
    mdcRipple: MDCRipple;

    /**
     * Specify the shape of the button.
     */
    @Prop({ reflect: true }) shape: WcsButtonShape = 'normal';

    /**
     * This attribute specify the appearance of the button.
     */
    @Prop({ reflect: true }) mode: WcsButtonMode = 'plain';

    @Listen('click')
    onClick(ev: Event) {
        if (this.disabled) {
            ev.stopImmediatePropagation();
        }
        if (this.type !== 'button' && hasShadowDom(this.el)) {
            // this button wants to specifically submit a form
            // climb up the dom to see if we're in a <form>
            // and if so, then use JS to submit it
            const form = this.el.closest('form');
            if (form) {
                ev.preventDefault();

                const fakeButton = window.document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
    }

    componentDidLoad() {
        this.mdcRipple = new MDCRipple(this.el.shadowRoot.querySelector('.wcs-inner-button'));
    }

    private enabledRippleEffect() {
        this.mdcRipple.disabled = false;
    }

    private disabledRippleEffect() {
        this.mdcRipple.disabled = true;
    }

    @Watch('ripple')
    onRippleChange(): void {
        if (this.ripple) {
            this.enabledRippleEffect();
        } else {
            this.disabledRippleEffect();
        }
    }

    render() {
        const TagType = this.href !== undefined ? 'a' : 'button';
        const attrs = this.href !== undefined
            ? { href: this.href, role: 'button' }
            : { type: this.type };

        return (
            <TagType
                {...attrs}
                class="wcs-inner-button"
                {...this.disabled === true ? { disabled: true } : null}
            >
                <slot/>
            </TagType>
        );
    }
}
