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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="container-fluid">
          <AppHeader />
          {children}
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
