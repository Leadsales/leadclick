import { h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const myComponentCss = ':host{display:block}';

let MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return h('div', null, "Hello, World! I'm ", this.first);
  }
  static get style() {
    return myComponentCss;
  }
};

const MyComponent = /*@__PURE__*/ proxyCustomElement(MyComponent$1, [1, 'my-component', { first: [1] }]);
const defineCustomElements = opts => {
  if (typeof customElements !== 'undefined') {
    [MyComponent].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyComponent, defineCustomElements };
