import "react-toastify/dist/ReactToastify.css";

import "./globals.scss";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Izoh Creatives",
  description:
    "Hey, I am Izoh,a freelance web designer and developer.I can get you a professional website with as little as Ksh 10,000 wherever you are.",
  openGraph: {
    title: "Izoh Creatives",
    description:
      "Hey, I am Izoh,a freelance web designer and developer.I can get a professional website with as little as Ksh 10,000 wherever you are.",
    type: "website",
    locale: "en_us",
    url: "https://www.izohcreatives.co.ke",
    siteName: "Izoh creatives",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
