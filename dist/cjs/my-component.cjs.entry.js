'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8530f7c8.js');

const myComponentCss = ':host{display:block}';

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h('div', null, "Hello, World! I'm ", this.first);
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
