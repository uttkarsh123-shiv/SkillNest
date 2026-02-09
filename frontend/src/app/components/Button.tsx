interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "success";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  onClick,
  className = ""
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap";
  
  const variantStyles = {
    primary: "bg-[#1a73e8] text-white hover:shadow-lg hover:bg-[#1557b0] active:scale-95",
    outline: "border border-[#c4c7c5] text-[#1a73e8] hover:bg-[#f0f4f9] bg-white",
    success: "bg-[#1e8e3e] text-white hover:shadow-lg hover:bg-[#137333] active:scale-95"
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}