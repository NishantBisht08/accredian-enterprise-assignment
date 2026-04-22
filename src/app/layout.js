import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "Empower your workforce with Accredian's premium enterprise training and certification programs in Data Science, AI, and Product Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col pt-[72px] selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
