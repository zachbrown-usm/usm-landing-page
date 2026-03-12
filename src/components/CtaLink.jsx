function isExternalUrl(href) {
  return /^https?:\/\//.test(href);
}

function CtaLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const external = isExternalUrl(href);
  const variantClass =
    variant === "secondary" ? "button-secondary" : "button-primary";

  return (
    <a
      href={href}
      className={`${variantClass} ${className}`.trim()}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export default CtaLink;
