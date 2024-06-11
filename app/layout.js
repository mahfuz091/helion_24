import "@/public/fonts/Neue-machina/stylesheet.css";
import "./globals.css";
import Header from "@/app/components/Header/Header"

export const metadata = {
  title: "Helion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}

      </body>
    </html>
  );


}
