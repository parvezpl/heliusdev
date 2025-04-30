
import "./globals.css";
import Footer from "../footer/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ABi5tu30kKpHJMlDdhW71AwFIggm8tsK2VFLhqw9F-8" />
      </head>
      <body className="min-h-screen  ">
          {children}
          <Footer />
      </body>
    </html>
  );
}
