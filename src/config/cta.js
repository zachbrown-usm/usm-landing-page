const env = import.meta.env;

export const ctaConfig = {
  primaryBookingUrl: env.VITE_PRIMARY_BOOKING_URL || "#fit-call",
  secondaryCtaUrl: env.VITE_SECONDARY_CTA_URL || "#proof",
  thankYouPageUrl: env.VITE_THANK_YOU_PAGE_URL || "/thank-you",
  ghlCalendarUrl: env.VITE_GHL_CALENDAR_URL || "",
  ghlFormUrl: env.VITE_GHL_FORM_URL || "",
};

export const hasExternalBookingUrl =
  ctaConfig.primaryBookingUrl &&
  !ctaConfig.primaryBookingUrl.startsWith("#");

export const hasGhlCalendar = Boolean(ctaConfig.ghlCalendarUrl);
export const hasGhlForm = Boolean(ctaConfig.ghlFormUrl);
