import "react-toastify/dist/ReactToastify.css";

import "./globals.scss";
import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Izoh Creatives",
  description: "A passionate web designer and developer",
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
