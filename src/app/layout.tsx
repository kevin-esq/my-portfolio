import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Portfolio",
  description: "React & .NET Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
