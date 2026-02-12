export default function Button({ children, onClick, variant = "default", className = "", type = "button" }) {
  const variants = {
    default: "btn btn-ghost",
    destructive: "btn btn-destructive",
    outline: "btn btn-ghost",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant] || variants.default} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
