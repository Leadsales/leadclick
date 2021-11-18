import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'leadclick-widget',
  styleUrl: 'leadclick.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class Leadclick {
  /**
   * The call to action message
   */
  @Prop() cta: string;
  /**
   * The Whatsapp url
   */
  @Prop() waurl: string;
  /**
   * The background color
   */
   @Prop() bgcolor: string;
   @Prop() svg = "whatsapp-icon.svg";

  readonly openWhatsApp: () => void;

  constructor () {
    this.openWhatsApp = () : void => {
      console.log("url", this.waurl);

      window.open(this.waurl, '_blank');
      return
    }
  }

  render() {
    return (
      <div class="wrapper">
        <div class="button" style={{backgroundColor: this.bgcolor ? this.bgcolor: "#3F40C2"}}onClick={this.openWhatsApp}>
          <img class="image" src={getAssetPath(`./assets/whatsapp-icon.svg`)} />
          <p class="cta-text">{this.cta}</p>
        </div>
        <p class="by">⚡️by <a class="link" href="https://leadsales.io/">leadsales.io</a></p>
      </div>
    );
  }
}

