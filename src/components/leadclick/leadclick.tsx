import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'leadclick-widget',
  styleUrl: 'leadclick.css',
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
          <p class="cta-text">{this.cta}</p>
        </div>
        <p class="by">⚡️by <a class="by" href="https://leadsales.io/">leadsales.io</a></p>
      </div>
    );
  }
}

