import "../styles/index.scss";
import { Metadata } from "next";
import { Roboto, Lora, Frank_Ruhl_Libre } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl-libre",
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epitome",
  description: "A Next.js portfolio starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${lora.variable} ${frankRuhlLibre.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
