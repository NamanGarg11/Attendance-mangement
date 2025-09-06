import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import BackToTopButton from "@/components/ui/BackToTopButton"
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ERP Portal",
  description: "College ERP System - Manage Students, Teachers, Attendance, and Reports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {/* Global Navigation */}
        <GoogleOAuthProvider clientId={process.env.NEXT_GOOGLE_CLIENT_ID!}>
          <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Notifications + Helpers */}
        <Toaster />
        <BackToTopButton />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
