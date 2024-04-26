import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Piton Technology",
  description: "Piton Technology Front-end Developer Staj Başvurusu Projesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
