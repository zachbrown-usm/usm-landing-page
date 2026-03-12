import { useEffect, useRef } from "react";

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

function CalendlyEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initializeCalendly = () => {
      if (
        cancelled ||
        !containerRef.current ||
        !window.Calendly ||
        typeof window.Calendly.initInlineWidget !== "function"
      ) {
        return;
      }

      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    };

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (existingScript) {
      if (window.Calendly) {
        initializeCalendly();
      } else {
        existingScript.addEventListener("load", initializeCalendly, {
          once: true,
        });
      }
    } else {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", initializeCalendly, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget calendar-embed-frame"
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export default CalendlyEmbed;
