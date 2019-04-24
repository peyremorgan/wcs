export const SelectArrow = ({ up }) => (h("svg", { style: { marginLeft: 'auto' }, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    h("style", { type: "text/css" }, `
            .arrow-group {
                transform-origin: 50% 50%;
                transition: transform 175ms ease-in-out;
            }
            .up {
                transform: scaleY(1);
            }
            .down {
                transform: scaleY(-1);
            }
        `),
    h("g", { fill: "none", class: (up ? 'up' : 'down') + ' arrow-group' },
        h("path", { class: "arrow", fill: "black", d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }),
        h("path", { d: "M0 0h24v24H0z", fill: "none" }))));
