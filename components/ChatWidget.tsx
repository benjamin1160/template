import Script from "next/script";
import type { SiteConfig } from "@/site.config.types";

/**
 * LeadConnector (GoHighLevel) chat widget, bound to the client's
 * sub-account via `location-id`. The widget is location-bound — no
 * separate widget id exists or is needed; GHL renders the location's
 * default chat widget and routes conversations into that sub-account's
 * inbox.
 *
 * Renders nothing unless site.config.ts carries a `ghl.locationId`
 * (populated automatically by the quick-launch pipeline).
 */

declare module "react" {
  // Custom-element typing requires JSX namespace augmentation in React 19.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "chat-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { "location-id"?: string };
    }
  }
}

export default function ChatWidget({ config }: { config: SiteConfig }) {
  const ghl = config.ghl;
  if (!ghl?.locationId || ghl.chatWidget === false) return null;

  return (
    <>
      <chat-widget location-id={ghl.locationId}></chat-widget>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        strategy="afterInteractive"
      />
    </>
  );
}
