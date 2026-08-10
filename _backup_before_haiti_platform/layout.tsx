import "./globals.css";

export const metadata = {
  title: "Alliance Nasyonal pou Devlopman",
  description: "National digital platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

