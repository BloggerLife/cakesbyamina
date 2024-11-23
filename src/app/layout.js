import { AppProvider } from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Whatsapp from "@/components/icons/Whatsapp";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Cakes By Amina",
  description: "•Baked to delight your tastes. Fall in love with our cakes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <span className=" fixed top-24 right-2 p-2 ">
              <Link href="https://wa.me/263773799776">
                <Whatsapp />
              </Link>
            </span>
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
