export declare class Leadclick {
  /**
   * The call to action message
   */
  cta: string;
  /**
   * The title to message for the integrations
   */
  instructions: string;
  /**
   * The Whatsapp url
   */
  waurl?: string;
  /**
   * The Instagram url
   */
  igurl?: string;
  /**
   * The Whatsapp url
   */
  fburl?: string;
  /**
   * The background color
   */
  bgcolor?: string;
  /**
   * The font color
   */
  fontcolor?: string;
  /**
   * The amount of connected integrations
   */
  integrations: number;
  showOptions: boolean;
  private openWhatsApp;
  private openFacebook;
  private openInstragram;
  private clickHandler;
  readonly whatsappSVG: string;
  readonly facebookSVG: string;
  readonly instagramSVG: string;
  readonly buttons: string[];
  render(): any;
}
