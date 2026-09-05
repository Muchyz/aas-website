import { Link } from "react-router-dom";

export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const base = variant === "outline" ? "btn-outline" : "btn-primary";
  const combined = `${base} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combined} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={combined} {...props}>
      {children}
    </Link>
  );
}
