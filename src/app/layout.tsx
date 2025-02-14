import "./globals.css";
import {
  geistMono,
  geistSans,
  pixelify,
  pressStart,
  SyneMono,
} from "./utils/fonts";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans} ${geistMono} ${pixelify} ${pressStart} ${SyneMono} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
