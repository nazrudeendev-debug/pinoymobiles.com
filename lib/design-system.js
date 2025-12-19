// This file is now DEPRECATED for colors.
// Colors are now defined in tailwind.config.mjs and app/globals.css
// This file is kept for legacy components that might still use these constants for non-color styles.

// Modern Button Variants using semantic colors
export const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  success:
    "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20",
  danger:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/30",
  accent:
    "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/30",
  uaeGradient: // Kept name for compatibility
    "bg-gradient-to-r from-primary to-foreground text-primary-foreground shadow-lg shadow-primary/30",
};

export const buttonSizes = {
  sm: "px-3 py-1.5 text-sm rounded-sm",
  md: "px-4 py-2.5 text-sm rounded-md",
  lg: "px-6 py-3 text-base rounded-lg",
  xl: "px-8 py-4 text-base rounded-xl",
};

export const buttonTransitions = "transition-colors duration-200 active:scale-95";

// Consistent form input styling with semantic colors
export const inputStyles = `
  w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm
  placeholder:text-muted-foreground
  focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring
  disabled:cursor-not-allowed disabled:opacity-50
`;

// Consistent card styling with semantic colors
export const cardStyles = `
  bg-card text-card-foreground rounded-xl border border-border
  shadow-sm hover:shadow-md transition-shadow duration-300
`;

// Themed badge styles with semantic colors
export const badgeStyles = {
  uaeVerified: "bg-gradient-to-r from-primary to-foreground text-primary-foreground",
  bestDeal: "bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground",
  hotTrending: "bg-gradient-to-r from-accent to-primary text-accent-foreground",
  uaeChoice: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
  loved: "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
  new: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  budget: "bg-gradient-to-r from-green-600 to-green-700 text-white",
};

// Consistent spacing scale (remains unchanged)
export const spacing = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "48px",
};