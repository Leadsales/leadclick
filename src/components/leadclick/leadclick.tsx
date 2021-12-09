import { Component, Prop, h, State } from '@stencil/core';

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
   * The title to message for the integrations
   */
  @Prop() instructions: string;
  /**
   * The Whatsapp url
   */
  @Prop() waurl?: string;
  /**
   * The Instagram url
   */
  @Prop() igurl?: string;
  /**
   * The Whatsapp url
   */
  @Prop() fburl?: string;
  /**
   * The background color
   */
   @Prop() bgcolor?: string;
  /**
   * The font color
   */
   @Prop() fontcolor?: string;
  /**
   * The amount of connected integrations
   */
  @Prop() integrations: number;
  /**
   * The name of the visible integrations
   */
  @Prop() visible_integrations: string;
  /**
   * The position where the widget will be placed
   */
   @Prop() orientation: string;

  @State() showOptions = false;

  private openWhatsApp () {
    window.open(this.waurl, '_blank');
    return
  }

  private openFacebook() {
    window.open(this.fburl, '_blank');
    return;
  }

  private openInstragram() {
    window.open(this.igurl, '_blank');
    return;
  }

  private clickHandler() {
    let buttons = this.visible_integrations.split(',');
    if (this.integrations === 1) {
      if (this.waurl && buttons[0] === "WhatsApp") {
        this.openWhatsApp()
        return
      }
      if (this.fburl && buttons[0] === "Facebook") {
        this.openFacebook()
        return
      };
      if (this.igurl && buttons[0] === "Instagram") {
        this.openInstragram()
        return
      };
    } else {
      this.showOptions = !this.showOptions;
    }
  }

  readonly whatsappSVG = "https://d3sfoqdi5f3194.cloudfront.net/whatsapp-icon.svg"
  readonly facebookSVG = "https://d3sfoqdi5f3194.cloudfront.net/messenger-icon.svg"
  readonly instagramSVG = "https://d3sfoqdi5f3194.cloudfront.net/instagram-icon.svg"

  render() {
    let options = null;
    let buttons = this.visible_integrations.split(',');
    if (this.showOptions) {
      options = (
          [
          <div class="title" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }}>{this.instructions}</div>,
          <div class="card">
            {buttons.map((btn, index, arr) => {
              let icon;
              if (btn === 'Instagram') {
                icon = this.instagramSVG;
              }
              if (btn === 'WhatsApp') {
                icon = this.whatsappSVG;
              }
              if (btn === 'Facebook') {
                icon = this.facebookSVG;
              }
              return (
                <div class="complete_row">
                  {index === 0 && <div class="space"/>}
                  <div class="row_item" onClick={btn === 'WhatsApp' ? this.openWhatsApp.bind(this): btn === 'Instagram' ? this.openInstragram.bind(this) : this.openFacebook.bind(this)}>
                    <img class="image" src={icon} />
                    <p class="integration">{btn}</p>
                  </div>
                  {index !== arr.length - 1 && <hr />}
                  {index === arr.length - 1 && <hr class="hidden"/>}
                </div>
              );
            })}
          </div>]
      );
    }
    return (
      <div class="wrapper" style={this.orientation === 'right' ? {position: "fixed", bottom: "0.2rem",right: "1rem"} : this.orientation === "left" ? {position: "fixed", bottom: "0.2rem", left: "1rem"} : {}}>
        {options}
        <div class="button" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }} onClick={this.clickHandler.bind(this)}>
          <div class="row_item">
            <img class="image" src={this.whatsappSVG} />
            <p class="cta-text">{this.cta}</p>
          </div>
        </div>
        <p class="by">
          ⚡️ by{' '}
          <a rel="dofollow" target="blank" class="leadsales_link" href="https://leadsales.io/">
            leadsales.io
          </a>
        </p>
      </div>
    );
  }
}

