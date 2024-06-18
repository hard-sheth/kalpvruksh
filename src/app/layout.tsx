import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalpvruksh",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia corrupti, ipsum dolores quibusdam vel reiciendis laudantium suscipit eos illum harum totam, aliquam voluptatem sequi voluptatum molestiae ab optio! Omnis, dignissimos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
