/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LeadclickWidget {
        /**
          * The background color
         */
        "bgcolor"?: string;
        /**
          * The call to action message
         */
        "cta": string;
        /**
          * The Whatsapp url
         */
        "fburl"?: string;
        /**
          * The font color
         */
        "fontcolor"?: string;
        /**
          * The Instagram url
         */
        "igurl"?: string;
        /**
          * The title to message for the integrations
         */
        "instructions": string;
        /**
          * The amount of connected integrations
         */
        "integrations": number;
        /**
          * The name of the visible integrations
         */
        "visible_integrations": string;
        /**
          * The Whatsapp url
         */
        "waurl"?: string;
    }
}
declare global {
    interface HTMLLeadclickWidgetElement extends Components.LeadclickWidget, HTMLStencilElement {
    }
    var HTMLLeadclickWidgetElement: {
        prototype: HTMLLeadclickWidgetElement;
        new (): HTMLLeadclickWidgetElement;
    };
    interface HTMLElementTagNameMap {
        "leadclick-widget": HTMLLeadclickWidgetElement;
    }
}
declare namespace LocalJSX {
    interface LeadclickWidget {
        /**
          * The background color
         */
        "bgcolor"?: string;
        /**
          * The call to action message
         */
        "cta"?: string;
        /**
          * The Whatsapp url
         */
        "fburl"?: string;
        /**
          * The font color
         */
        "fontcolor"?: string;
        /**
          * The Instagram url
         */
        "igurl"?: string;
        /**
          * The title to message for the integrations
         */
        "instructions"?: string;
        /**
          * The amount of connected integrations
         */
        "integrations"?: number;
        /**
          * The name of the visible integrations
         */
        "visible_integrations"?: string;
        /**
          * The Whatsapp url
         */
        "waurl"?: string;
    }
    interface IntrinsicElements {
        "leadclick-widget": LeadclickWidget;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "leadclick-widget": LocalJSX.LeadclickWidget & JSXBase.HTMLAttributes<HTMLLeadclickWidgetElement>;
        }
    }
}
