import { Inter } from "next/font/google";

import "../../styles/reset.css";
import "../../styles/variables.css";
import "../../styles/global.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "maXideo",
  description: "The Future Of Entertainment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`vh100 container ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
