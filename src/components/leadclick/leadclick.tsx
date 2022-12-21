import {
  Component,
  Prop,
  h,
  State,
} from '@stencil/core';

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

  /**
   * Whether by leadsales.io copy will be displayed or not
   */
  @Prop() ispremium?: boolean;

  /**
   * A custom z-index in case you need to override the default one
   */
  @Prop() custom_z_index?: number | string;

  @State() showOptions = false;

  private openWhatsApp() {
    window.open(this.waurl, '_blank');
  }

  private openFacebook() {
    window.open(this.fburl, '_blank');
  }

  private openInstragram() {
    window.open(this.igurl, '_blank');
  }

  private clickHandler() {
    const buttons = this.visible_integrations.split(',');
    if (this.integrations === 1) {
      if (this.waurl && buttons[0] === 'WhatsApp') {
        this.openWhatsApp();
        return;
      }
      if (this.fburl && buttons[0] === 'Facebook') {
        this.openFacebook();
        return;
      }
      if (this.igurl && buttons[0] === 'Instagram') {
        this.openInstragram();
      }
    } else {
      this.showOptions = !this.showOptions;
    }
  }

  readonly whatsappSVG = 'https://d3sfoqdi5f3194.cloudfront.net/whatsapp-icon.svg';

  readonly facebookSVG = 'https://d3sfoqdi5f3194.cloudfront.net/messenger-icon.svg';

  readonly instagramSVG = 'https://d3sfoqdi5f3194.cloudfront.net/instagram-icon.svg';

  render() {
    let options = null;
    const buttons = this.visible_integrations.split(',');
    console.log(this.ispremium, 'isPremium');

    if (this.showOptions) {
      options = [
        <div class="leadsales__title leadsales__noselect" style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }}>
          {this.instructions}
        </div>,
        <div class="leadsales__card">
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
              <div class="leadsales__complete_row">
                {index === 0 && <div class="leadsales__space" />}
                <div
                  class="leadsales__row_item"
                  onClick={btn === 'WhatsApp' ? this.openWhatsApp.bind(this) : btn === 'Instagram' ? this.openInstragram.bind(this) : this.openFacebook.bind(this)}
                >
                  <img class="leadsales__list_image leadsales__noselect" src={icon} />
                  <p class="leadsales__integration leadsales__noselect">{btn}</p>
                </div>
                {index !== arr.length - 1 && <hr />}
                {index === arr.length - 1 && <hr class="leadsales__hidden" />}
              </div>
            );
          })}
        </div>,
      ];
    }

    const getOrientation = (orientation: string): Record<string, any> => {
      switch (orientation) {
        case 'right':
          return { position: 'fixed', bottom: '0.2rem', right: '1rem' };
        case 'left':
          return { position: 'fixed', bottom: '0.2rem', left: '1rem' };
        case 'none':
          return { display: 'none' };
        default:
          return {};
      }
    };
    const styles = {
      ...getOrientation(this.orientation),
      'z-index': `${this.custom_z_index || 9_999_999}`,
    } as Record<string, string>;

    return (
      <div class="leadsales__wrapper" style={styles}>
        {options}
        <div
          class="leadsales__button"
          style={{ backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' }}
          onClick={this.clickHandler.bind(this)}
        >
          <div class="leadsales__btn_row">
            <img
              class="leadsales__image leadsales__noselect"
              src={buttons[0] === 'WhatsApp' ? this.whatsappSVG : buttons[0] === 'Instagram' ? this.instagramSVG : this.facebookSVG}
            />
            <p class="leadsales__cta-text leadsales__noselect">{this.cta}</p>
          </div>
        </div>
        <p class="leadsales__by" style={this.ispremium === true ? { visibility: 'hidden' } : {}}>
          ⚡️ by{' '}
          <a rel="dofollow" target="blank" class="leadsales__leadsales_link" href={`https://leadsales.io/?utm_source=${window.location.href.split('/')[2]}&utm_medium=leadclick`}>
            leadsales.io
          </a>
        </p>
      </div>
    );
  }
}
