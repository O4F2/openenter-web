import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "OpenEnter | Open Events, Enter Markets",
  description: "Web2 & Web3 이벤트 및 마케팅 에이전시. 오프라인 행사 운영부터 시장 진입 전략까지.",
  // icons 부분은 삭제했습니다. (app/icon.tsx 파일이 자동으로 작동합니다)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#050505] text-white`}>{children}</body>
    </html>
  );
}