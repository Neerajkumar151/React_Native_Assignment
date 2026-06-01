export type ThemeColors = {
  primary: string;
  secondary: string;
  background: {
    main: string;
    paper: string;
    surface: string;
    elevated: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    placeholder: string;
    dark: string;
  };
  status: {
    error: string;
    errorLight: string;
    errorDark: string;
    success: string;
    successDark: string;
    info: string;
    infoLight: string;
    warning: string;
    warningDark: string;
  };
  accents: {
    purple: string;
    cyan: string;
  };
  border: string;
  transparent: string;
};

export const lightColors: ThemeColors = {
  primary: "#1E40AF",
  secondary: "#3B82F6",
  background: {
    main: "#F3F4F6",
    paper: "#FFFFFF",
    surface: "#FFFFFF",
    elevated: "#F9FAFB",
    dark: "#111827",
  },
  text: {
    primary: "#000000",
    secondary: "#374151",
    muted: "#6B7280",
    placeholder: "#9CA3AF",
    dark: "#FFFFFF", 
  },
  status: {
    error: "#EF4444",
    errorLight: "#F87171",
    errorDark: "#B91C1C",
    success: "#10B981",
    successDark: "#047857",
    info: "#3B82F6",
    infoLight: "#60A5FA",
    warning: "#F59E0B",
    warningDark: "#B45309",
  },
  accents: {
    purple: "#6D28D9",
    cyan: "#06B6D4",
  },
  border: "#E5E7EB",
  transparent: "transparent",
};

export const darkColors: ThemeColors = {
  primary: "#3B82F6", // Lighter blue for dark mode
  secondary: "#1E40AF",
  background: {
    main: "#111827",
    paper: "#1F2937",
    surface: "#1F2937",
    elevated: "#374151",
    dark: "#000000",
  },
  text: {
    primary: "#F9FAFB",
    secondary: "#D1D5DB",
    muted: "#9CA3AF",
    placeholder: "#6B7280",
    dark: "#FFFFFF", 
  },
  status: {
    error: "#F87171",
    errorLight: "#FCA5A5",
    errorDark: "#EF4444",
    success: "#34D399",
    successDark: "#10B981",
    info: "#60A5FA",
    infoLight: "#93C5FD",
    warning: "#FBBF24",
    warningDark: "#F59E0B",
  },
  accents: {
    purple: "#8B5CF6",
    cyan: "#22D3EE",
  },
  border: "#4B5563",
  transparent: "transparent",
};
