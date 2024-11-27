import localFont from "next/font/local";
import "./globals.css";
import AppSidebar from "@/pages/AppSideBar/AppSideBar";
import Header from "./component/headercomponent/Header";
import { Providers } from "@/store/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Finance Tracking",
  description: "Personal finance management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers >
          <AppSidebar />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
