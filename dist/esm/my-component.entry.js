import { r as registerInstance, h } from './index-77febba0.js';

const myComponentCss = ':host{display:block}';

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h('div', null, "Hello, World! I'm ", this.first);
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
