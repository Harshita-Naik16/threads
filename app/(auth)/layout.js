import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Threads",
  description: "A message sharing app by instagram",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body className={`${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
