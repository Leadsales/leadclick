import { r as t, g as i, h as e } from './p-e23fcbc6.js';
let r = class {
  constructor(e) {
    t(this, e),
      (this.showOptions = !1),
      (this.whatsappSVG = i('./assets/whatsapp-icon.svg')),
      (this.facebookSVG = i('./assets/messenger-icon.svg')),
      (this.instagramSVG = i('./assets/instagram-icon.svg')),
      (this.buttons = ['Instagram', 'Facebook', 'Whatsapp']);
  }
  openWhatsApp() {
    window.open(this.waurl, '_blank');
  }
  openFacebook() {
    window.open(this.fburl, '_blank');
  }
  openInstragram() {
    window.open(this.igurl, '_blank');
  }
  clickHandler() {
    1 === this.integrations ? (this.waurl && this.openWhatsApp(), this.fburl && this.openFacebook(), this.igurl && this.openInstragram()) : (this.showOptions = !this.showOptions);
  }
  render() {
    let t = null;
    return (
      this.showOptions &&
        (t = [
          e('div', { class: 'title', style: { backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' } }, this.instructions),
          e(
            'div',
            { class: 'card' },
            this.buttons.map((t, i, r) => {
              let s;
              return (
                'Instagram' === t && (s = this.instagramSVG),
                'Whatsapp' === t && (s = this.whatsappSVG),
                'Facebook' === t && (s = this.facebookSVG),
                e(
                  'div',
                  { class: 'complete_row' },
                  0 === i && e('div', { class: 'space' }),
                  e(
                    'div',
                    {
                      class: 'row_item',
                      onClick: 'Whatsapp' === t ? this.openWhatsApp.bind(this) : 'Instagram' === t ? this.openInstragram.bind(this) : this.openFacebook.bind(this),
                    },
                    e('img', { class: 'image', src: s }),
                    e('p', { class: 'integration' }, t),
                  ),
                  i !== r.length - 1 && e('hr', null),
                  i === r.length - 1 && e('hr', { class: 'hidden' }),
                )
              );
            }),
          ),
        ]),
      e(
        'div',
        { class: 'wrapper' },
        t,
        e(
          'div',
          {
            class: 'button',
            style: { backgroundColor: this.bgcolor ? this.bgcolor : '#3F40C2', color: this.fontcolor ? this.fontcolor : '#ffffff' },
            onClick: this.clickHandler.bind(this),
          },
          e('img', { class: 'image', src: i('./assets/whatsapp-icon.svg') }),
          e('p', { class: 'cta-text' }, this.cta),
        ),
        e('p', { class: 'by' }, '⚡️by', ' ', e('a', { rel: 'dofollow', target: 'blank', class: 'leadsales_link', href: 'https://leadsales.io/' }, 'leadsales.io')),
      )
    );
  }
  static get assetsDirs() {
    return ['assets'];
  }
};
r.style =
  ":host{display:block}.wrapper{width:220px;position:fixed;bottom:0.2rem;right:1rem;text-align:center;font-family:'Open Sans', 'Helvetica Neue'}.button{border-radius:0.375rem;height:2rem;cursor:pointer;height:3rem;padding:2px;box-shadow:4px 4px 4px rgba(134, 134, 134, 0.8);overflow:hidden;align-items:center}.cta-text{display:inline-block;margin-left:0.5rem}.by{color:#282828;background-color:transparent;margin-top:0.3rem;font-size:0.875rem;line-height:1.25rem}.leadsales_link{text-decoration:none;color:#3f40c2;font-weight:500}.image{width:1.5rem;height:1.5rem;margin-bottom:-0.3rem}.card{background-color:#f6f6fa;width:full;margin-bottom:1rem;border-bottom-left-radius:0.375rem;border-bottom-right-radius:0.375rem;box-shadow:4px 4px 4px rgba(134, 134, 134, 0.8)}.row_item{cursor:pointer;height:auto}.row_item:hover{background-color:rgba(121, 121, 197, 0.3)}.integration{display:inline-block;height:auto;margin-left:0.5rem}hr{border:0;height:1px;background-image:linear-gradient(to right, rgba(0, 0, 0, 0), rgba(192, 192, 192, 0.75), rgba(0, 0, 0, 0))}.list_image{width:1.5rem;height:1.5rem;margin-bottom:-0.5rem}.title{color:#fff;height:auto;width:full;padding:1rem;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;box-shadow:4px 4px 4px rgba(134, 134, 134, 0.8)}.hidden{visibility:hidden}.space{height:9px}@media (max-width: 600px){.wrapper{width:100px;position:fixed;bottom:0.2rem;right:1rem;text-align:center}.button{width:50px;padding:0.5rem;border-radius:9999px;margin-left:1rem}.cta-text{display:none}.image{width:2rem;height:2rem;margin-bottom:-1.4rem}.by{width:100px;color:#282828;background-color:transparent;margin-top:0.3rem;font-size:0.7rem;line-height:1rem}.leadsales_link{text-decoration:none;color:#3f40c2;font-weight:500}.title{display:none}hr{display:none}.row_item{border-radius:9999px;width:50px;height:48px;padding:0.5rem;cursor:pointer;background-color:rgb(226, 226, 226);box-shadow:4px 4px 4px rgba(134, 134, 134, 0.8);margin-bottom:0.5rem;margin-left:1rem}.integration{display:none}.card{background-color:transparent;box-shadow:none}}";
export { r as leadclick_widget };
