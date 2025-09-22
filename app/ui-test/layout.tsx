import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Component Test",
  description: "Comprehensive test page for Alta Via Applications Button component system",
};

export default function UITestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}