import "@/shared/css/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Иван Стрилец",
  description:
    "Профессиональный фронтенд разработчик с опытом работы в создании современных и адаптивных веб-приложений",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
