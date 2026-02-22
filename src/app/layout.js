import "./globals.css";

export const metadata = {
  title: "Custom Coded Technology Solutions",
  description:
    "Small business software solutions, consulting, and custom PC building — bringing modern computing power to everyday creators and entrepreneurs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
