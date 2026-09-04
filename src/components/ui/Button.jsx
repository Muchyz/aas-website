import { Link } from "react-router-dom";

export default function Button({ to, href, variant = "primary", children, ...props }) {
  const base = variant === "outline" ? "btn-outline" : "btn-primary";

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={base} {...props}>
      {children}
    </Link>
  );
}
