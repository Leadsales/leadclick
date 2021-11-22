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
   
   readonly svg = "whatsapp-icon.svg";
   readonly buttons = ['instagram', 'facebook', 'whatsapp']


  // Helper functions
  openWhatsApp() {
    window.open(this.WAUrl, '_blank');
    return
  }

  openFacebook() {
    window.open(this.FBUrl, '_blank');
    return
  }

  openInstragram() {
    window.open(this.IGUrl, '_blank');
    return
  }
  

  clickHandler() {
     if(this.integrations === 1){
       if(this.WAUrl) this.openWhatsApp();
       if(this.FBUrl) this.openFacebook();
       if(this.IGUrl) this.openInstragram();
     }else{
       this.showOptions = !this.showOptions;
     }
  }

  

  render() {
    let options = null;
    if (this.showOptions) {
        options = (
          <div class="card" >
            <p>👋 ¿Por qué canal te gustaría comunicarte con nosotros?</p>
            {this.buttons.map((btn, index, arr) => (
                <div class="row_item">  
                    <img class="image" src={btn == 'instagram' ? getAssetPath(`./assets/instagram-icon.svg`) : btn == 'facebook' ? getAssetPath(`./assets/messenger-icon.svg`) : getAssetPath(`./assets/whatsapp-icon.svg`)} />
                    <p class="integration">{btn}</p>
                    {index !== arr.length-1 && <hr/>}
                </div>
            ))}
                </div>
            );
    }

    return (
      <div class="wrapper">
        {options}
        <div class="button" style={{backgroundColor: this.bgcolor ? this.bgcolor: "#3F40C2"}} onClick={this.clickHandler.bind(this)}>
          <img class="image" src={getAssetPath(`./assets/whatsapp-icon.svg`)} />
          <p class="cta-text">{this.cta}</p>
        </div>
        <p class="by">⚡️by <a class="link" href="https://leadsales.io/">leadsales.io</a></p>
      </div>
    );
  }
}

