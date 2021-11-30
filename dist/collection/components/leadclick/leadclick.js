import { Component, Prop, h, State, getAssetPath } from '@stencil/core';
export class Leadclick {
  constructor() {
    this.showOptions = false;
    this.whatsappSVG = getAssetPath(`./assets/whatsapp-icon.svg`);
    this.facebookSVG = getAssetPath(`./assets/messenger-icon.svg`);
    this.instagramSVG = getAssetPath(`./assets/instagram-icon.svg`);
    this.buttons = ['Instagram', 'Facebook', 'Whatsapp'];
  }
  openWhatsApp() {
    window.open(this.waurl, '_blank');
    return;
  }
  openFacebook() {
    window.open(this.fburl, '_blank');
    return;
  }
  openInstragram() {
    window.open(this.igurl, '_blank');
    return;
  }
  clickHandler() {
    if (this.integrations === 1) {
      if (this.waurl)
        this.openWhatsApp();
      if (this.fburl)
        this.openFacebook();
      if (this.igurl)
        this.openInstragram();
    }
    else {
      this.showOptions = !this.showOptions;
    }
  }
  render() {
    let options = null;
    if (this.showOptions) {
      options = ([
        h("div", { class: "title", style: { backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' } }, this.instructions),
        h("div", { class: "card" }, this.buttons.map((btn, index, arr) => {
          let icon;
          if (btn === 'Instagram') {
            icon = this.instagramSVG;
          }
          if (btn === 'Whatsapp') {
            icon = this.whatsappSVG;
          }
          if (btn === 'Facebook') {
            icon = this.facebookSVG;
          }
          return (h("div", { class: "complete_row" },
            index === 0 && h("div", { class: "space" }),
            h("div", { class: "row_item", onClick: btn === 'Whatsapp' ? this.openWhatsApp.bind(this) : btn === 'Instagram' ? this.openInstragram.bind(this) : this.openFacebook.bind(this) },
              h("img", { class: "image", src: icon }),
              h("p", { class: "integration" }, btn)),
            index !== arr.length - 1 && h("hr", null),
            index === arr.length - 1 && h("hr", { class: "hidden" })));
        }))
      ]);
    }
    return (h("div", { class: "wrapper" },
      options,
      h("div", { class: "button", style: { backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }, onClick: this.clickHandler.bind(this) },
        h("img", { class: "image", src: getAssetPath(`./assets/whatsapp-icon.svg`) }),
        h("p", { class: "cta-text" }, this.cta)),
      h("p", { class: "by" },
        "\u26A1\uFE0Fby",
        ' ',
        h("a", { rel: "dofollow", target: "blank", class: "leadsales_link", href: "https://leadsales.io/" }, "leadsales.io"))));
  }
  static get is() { return "leadclick-widget"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["leadclick.css"]
  }; }
  static get styleUrls() { return {
    "$": ["leadclick.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "cta": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The call to action message"
      },
      "attribute": "cta",
      "reflect": false
    },
    "instructions": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The title to message for the integrations"
      },
      "attribute": "instructions",
      "reflect": false
    },
    "waurl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Whatsapp url"
      },
      "attribute": "waurl",
      "reflect": false
    },
    "igurl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Instagram url"
      },
      "attribute": "igurl",
      "reflect": false
    },
    "fburl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Whatsapp url"
      },
      "attribute": "fburl",
      "reflect": false
    },
    "bgcolor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The background color"
      },
      "attribute": "bgcolor",
      "reflect": false
    },
    "fontcolor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The font color"
      },
      "attribute": "fontcolor",
      "reflect": false
    },
    "integrations": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The amount of connected integrations"
      },
      "attribute": "integrations",
      "reflect": false
    }
  }; }
  static get states() { return {
    "showOptions": {}
  }; }
}
