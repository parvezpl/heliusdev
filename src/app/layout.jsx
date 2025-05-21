
import "./globals.css";
import Footer from "../footer/footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>HeliusDEV - Web Development</title>
        <meta name="google-site-verification" content="ABi5tu30kKpHJMlDdhW71AwFIggm8tsK2VFLhqw9F-8" />
        <meta name="description" content="Build smart websites with HeliusDEV." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="">
        {children}
        <Footer />
      </body>
    </html>
  );
}
