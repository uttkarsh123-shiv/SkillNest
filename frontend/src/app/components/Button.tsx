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
    primary: "bg-[#4F46E5] text-white hover:bg-[#4338ca] shadow-sm hover:shadow-md",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white",
    success: "bg-[#4F46E5] text-white hover:bg-[#4338ca] shadow-sm hover:shadow-md"
  };

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base"
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