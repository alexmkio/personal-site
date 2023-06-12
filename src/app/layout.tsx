import "@styles/index.scss";
import { Roboto, Lora, Frank_Ruhl_Libre } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-frank-ruhl-libre",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Alex Kio",
  description: "My personal portfolio app",
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
