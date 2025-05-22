import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SessionWrapper from "@/Components/sessionWrapper";


export const metadata = {
  title: "Seek & Offer",
  description: "Building a Stronger Community-How Getting Help Can Lead to Helping Others",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#090614]">
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>

    </html>
  );
}
