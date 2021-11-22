import { Component, Prop, getAssetPath, State, h } from '@stencil/core';

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
  @Prop() WAUrl?: string;
  /**
   * The Facebook url
   */
  @Prop() FBUrl?: string;
  /**
   * The Instagram url
   */
  @Prop() IGUrl?: string;
  /**
   * The background color
   */
  @Prop() bgcolor: string;
  /**
   * The amount of connected integrations
   */
  @Prop() integrations: number;

  @State() showOptions = false;

  readonly whatsappSVG = getAssetPath(`./assets/whatsapp-icon.svg`);
  readonly facebookSVG = getAssetPath(`./assets/messenger-icon.svg`);
  readonly instagramSVG = getAssetPath(`./assets/instagram-icon.svg`);
  readonly buttons = ['Instagram', 'Facebook', 'Whatsapp'];

  // Helper functions
  private openWhatsApp() {
    window.open(this.WAUrl, '_blank');
    return;
  }

  private openFacebook() {
    window.open(this.FBUrl, '_blank');
    return;
  }

  private openInstragram() {
    window.open(this.IGUrl, '_blank');
    return;
  }

  private clickHandler() {
    if (this.integrations === 1) {
      if (this.WAUrl) this.openWhatsApp();
      if (this.FBUrl) this.openFacebook();
      if (this.IGUrl) this.openInstragram();
    } else {
      this.showOptions = !this.showOptions;
    }
  }

  render() {
    let options = null;
    if (this.showOptions) {
      options = (
        <div>
          <div class="title">👋 ¿Por qué canal te gustaría comunicarte con nosotros?</div>
          <div class="card">
            {this.buttons.map((btn, index, arr) => {
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
              return (
                <div class="complete_row">
                  {index === 0 && <div class="space"/>}
                  <div class="row_item" onClick={btn === 'Whatsapp' ? this.openWhatsApp.bind(this): this.openInstragram.bind(this)}>
                    <img class="list_image" src={icon} />
                    <p class="integration">{btn}</p>
                  </div>
                  {index !== arr.length - 1 && <hr />}
                  {index === arr.length - 1 && <hr class="hidden"/>}
                </div>
              );
            })}
          </div>

        </div>
      );
    }

    return (
      <div class="wrapper">
        {options}
        <div class="button" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2' }} onClick={this.openWhatsApp.bind(this)}>
          <img class="image" src={getAssetPath(`./assets/whatsapp-icon.svg`)} />
          <p class="cta-text">{this.cta}</p>
        </div>
        <p class="by">
          ⚡️by{' '}
          <a rel="follow" target="blank" class="leadsales_link" href="https://leadsales.io/">
            leadsales.io
          </a>
        </p>
      </div>
    );
  }
}
