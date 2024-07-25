import "react-toastify/dist/ReactToastify.css";

import "./globals.scss";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  metadataBase: new URL("https://www.izohcreatives.co.ke"),
  title: "Izoh Creatives",
  description:
    "Hey ,I am Izoh.I create modern websites using the latest technologies like React and Next Js.With as little as Ksh 10,000 you get a professional website.Wherever you are.",
  openGraph: {
    title: "Izoh Creatives",
    description:
      "Hey ,I am Izoh.I create modern websites using the latest technologies like React and Next Js.With as little as Ksh 10,000 you get a professional website.Wherever you are.",
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
