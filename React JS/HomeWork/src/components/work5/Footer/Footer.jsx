import { useTheme } from "../contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();
  return <footer className={theme}>{new Date().getFullYear()}</footer>;
};
