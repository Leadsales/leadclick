import { Component, Prop, h } from '@stencil/core';
export class MyComponent {
  render() {
    return h('div', null, "Hello, World! I'm ", this.first);
  }
  static get is() {
    return 'my-component';
  }
  static get encapsulation() {
    return 'shadow';
  }
  static get originalStyleUrls() {
    return {
      $: ['my-component.css'],
    };
  }
  static get styleUrls() {
    return {
      $: ['my-component.css'],
    };
  }
  static get properties() {
    return {
      first: {
        type: 'string',
        mutable: false,
        complexType: {
          original: 'string',
          resolved: 'string',
          references: {},
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: 'The first name',
        },
        attribute: 'first',
        reflect: false,
      },
    };
  }
}
