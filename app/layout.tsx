import type { ReactNode } from "react";
export const metadata = { title: "DP Demo" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "ui-rounded, system-ui, sans-serif", background: "#faf6ef", color: "#2b2620", margin: 0 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "48px 20px" }}>{children}</div>
      </body>
    </html>
  );
}
