import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "../components/Layouts/Navbar/NavigationWrapper";
import FooterWrapper from "../components/Layouts/Footer/FooterWrapper";
import SalWrapper from "../components/common/SalWrapper";
import { ThemeProvider } from "../components/common/ThemeProvider"; // Import the provider
import {
  DM_Sans,
  Sail,
  Anton,
  Fahkwang,
  Chivo,
  Chakra_Petch,
  IBM_Plex_Sans,
} from "next/font/google";

import { DirectionProvider } from "../components/common/DirectionProvider";
import DirToggleButton from "../components/common/DirToggleButton";

export const metadata: Metadata = {
  title:
    "Business Forum - Next TS (App Router) Online courses & Education Template",
  description: "Modern Next.js application with TypeScript and Tailwind CSS",
  icons: {
    icon: "/favicon-icon.png",
  },
};

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const sail = Sail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sail",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-fahkwang",
});

export const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});

export const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra",
});

export const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`
  ${dmSans.variable}
  ${sail.variable}
  ${anton.variable}
  ${fahkwang.variable}
  ${chivo.variable}
  ${chakraPetch.variable}
  ${ibmPlex.variable}
`}
      data-mode="light"
    >
      <body className="font-body" suppressHydrationWarning>
        <ThemeProvider>
          <DirectionProvider>
            <SalWrapper>
              <NavigationWrapper />
              {children}
              <FooterWrapper />
            </SalWrapper>
            <DirToggleButton /> {/* ✅ inside DirectionProvider */}
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
