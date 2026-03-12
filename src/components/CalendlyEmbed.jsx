import { useEffect } from "react";

function CalendlyEmbed({ url }) {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget calendar-embed-frame"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default CalendlyEmbed;
