import "./globals.css";
import Header from '../app/Header/page'
import Footer from '../app/Footer/page'

export const metadata = {
  title: "Creative Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
