import "@/public/fonts/Neue-machina/stylesheet.css";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Helion",
  description: "Helion",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
