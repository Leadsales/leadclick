import { Component, Prop, h, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'leadclick-widget',
  styleUrl: 'leadclick.css',
  shadow: true,
  assetsDirs: ['assets'],
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
    if (this.integrations === 1) {
      if (this.waurl) this.openWhatsApp();
      if (this.fburl) this.openFacebook();
      if (this.igurl) this.openInstragram();
    } else {
      this.showOptions = !this.showOptions;
    }
  }

  readonly whatsappSVG = getAssetPath(`./assets/whatsapp-icon.svg`);
  readonly facebookSVG = getAssetPath(`./assets/messenger-icon.svg`);
  readonly instagramSVG = getAssetPath(`./assets/instagram-icon.svg`);
  readonly buttons = ['Instagram', 'Facebook', 'WhatsApp'];


  render() {
    let options = null;
    if (this.showOptions) {
      options = (
          <div>
          <div class="title" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }}>{this.instructions}</div>,
          <div class="card">
            {this.buttons.map((btn, index, arr) => {
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
                  <div class="row_item" onClick={btn === 'Whatsapp' ? this.openWhatsApp.bind(this): btn === 'Instagram' ? this.openInstragram.bind(this) : this.openFacebook.bind(this)}>
                    <img class="image" src={icon} />
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
        <div class="button" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }} onClick={this.clickHandler.bind(this)}>
          <div class="row_item">
            <img class="image" src={getAssetPath(`./assets/whatsapp-icon.svg`)} />
            <p class="cta-text">{this.cta}</p>
          </div>
        </div>
        <p class="by">
          ⚡️by{' '}
          <a rel="dofollow" target="blank" class="leadsales_link" href="https://leadsales.io/">
            leadsales.io
          </a>
        </p>
      </div>
    );
  }
}

