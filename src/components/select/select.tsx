import { Component, Element, State, Prop, Event, EventEmitter, Watch, Listen, FunctionalComponent } from '@stencil/core';

import { SelectCompareFn, SelectChangeEventDetail } from './select-interface';
import MDCRipple from '@material/ripple';

@Component({
    tag: 'wcs-select',
    styleUrl: 'select.scss',
    shadow: true
})
export class Select {

    @Element() el!: HTMLWcsSelectElement;

    @State() isExpanded = false;
    @State() hasLoaded = false;
    /**
     * Text to display for the selected option, when no option is selected, the value is undefined
     */
    @State() displayText: string;


    /**
     * If `true`, the user cannot interact with the select.
     */
    @Prop() disabled = false;

    /**
     * The text to display when the select is empty.
     */
    @Prop({ mutable: true }) placeholder?: string | null;

    /**
     * The name of the control, which is submitted with the form data.
     */
    @Prop() name?: string;

    /**
     * If `true`, the select can accept multiple values.
     */
    @Prop() multiple = false;

    /**
     * A property name or function used to compare object values
     */
    @Prop() compareWith?: string | SelectCompareFn | null;

    /**
     * the value of the select.
     */
    @Prop({ mutable: true }) value?: any | null;

    /**
     * Emitted when the value has changed.
     */
    @Event() wcsChange!: EventEmitter<SelectChangeEventDetail>;

    /**
     * Emitted when the select has focus.
     */
    @Event() wcsFocus!: EventEmitter<void>;

    /**
     * Emitted when the select loses focus.
     */
    @Event() wcsBlur!: EventEmitter<void>;
    didInit: boolean;

    @Watch('disabled')
    disabledChanged() {
        // this.emitStyle();
    }

    @Watch('isExpanded')
    isExpandedChanged() {
        console.log(this.isExpanded);
        // TODO : Add css classes to show the select options
    }

    private addRippleEffect() {
        const ripple = new MDCRipple.MDCRipple(this.el.shadowRoot.querySelector('.wcs-select-text'));
        ripple.unbound = true;
    }

    componentDidLoad() {
        this.el.addEventListener('click', () => this.isExpanded = !this.isExpanded);
        this.hasLoaded = true;
        this.addRippleEffect();
    }

    @Listen('window:click')
    onWindowClickEvent(event: MouseEvent) {
        if (event.target !== this.el) {
            this.isExpanded = false;
        }
    }

    hostData() {
        return {
            'class': {
                'is-expanded': this.isExpanded
            }
        };
    }

    @Listen('wcsSelectOptionClick')
    selectedOptionChanged(event: CustomEvent) {
        this.value = event.detail.value;
        this.displayText = event.detail.displayText;
    }

    render() {
        if (this.hasLoaded) {
            const optionsEl = this.el.shadowRoot.querySelector('.wcs-select-options');
            // Make the options container the same width as everything.
            optionsEl.setAttribute('style', `width: calc(${this.el.offsetWidth}px - 2.50rem - 2px);`);
            this.setMarginTopOnNotFirstOption(optionsEl);
        }
        return (
            <div class={this.isExpanded ? 'is-expanded' : '' + ' wcs-select-wrapper'}>
                <div class="wcs-select-text">
                    <p>{this.displayText === undefined ? this.placeholder : this.displayText}</p>
                    <RightArrow up={this.isExpanded} />
                </div>
                <div class="wcs-select-options">
                    <slot name="wcs-select-option" />
                </div>
            </div>
        );
    }

    // XXX: Investigate if there is no way to do it with pure CSS.
    private setMarginTopOnNotFirstOption(optionsEl: Element) {
        optionsEl.querySelector('slot')
            .assignedElements()
            .forEach((opt, key) => {
                if (key !== 0) {
                    opt.setAttribute('style', `margin-top: 0.875rem;`);
                }
            });
    }
}

const RightArrow: FunctionalComponent<{ up: boolean }> = ({ up }) => (
    <svg style={{ marginLeft: 'auto' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <style type="text/css">{`
            .arrow {
                transform-origin: 50% 50%;
                transition: transform 175ms ease-in-out;
            }
            .up {
                transform: scaleY(1);
            }
            .down {
                transform: scaleY(-1);
            }
        `}</style>
        <g fill="none" class={(up ? 'up' : 'down') + ' arrow'} >
            <path fill="black" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </g>
    </svg>
);