import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Izoh Creatives",
  description: "Home of web and graphics design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="w-screen min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
