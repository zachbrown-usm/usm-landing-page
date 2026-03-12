const env = import.meta.env;
const defaultCalendlyUrl =
  "https://calendly.com/upscalemediadesigns/log-home-lead-engine-fit-walkthrough?background_color=000000&text_color=ffffff&primary_color=b06f3a";

export const ctaConfig = {
  primaryBookingUrl: env.VITE_PRIMARY_BOOKING_URL || defaultCalendlyUrl,
  secondaryCtaUrl: env.VITE_SECONDARY_CTA_URL || "#proof",
  thankYouPageUrl: env.VITE_THANK_YOU_PAGE_URL || "/thank-you",
  ghlCalendarUrl: env.VITE_GHL_CALENDAR_URL || defaultCalendlyUrl,
  ghlFormUrl: env.VITE_GHL_FORM_URL || "",
};

export const hasExternalBookingUrl =
  ctaConfig.primaryBookingUrl &&
  !ctaConfig.primaryBookingUrl.startsWith("#");

export const hasGhlCalendar = Boolean(ctaConfig.ghlCalendarUrl);
export const hasGhlForm = Boolean(ctaConfig.ghlFormUrl);
