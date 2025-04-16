import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"lending-page-wrapper"}>
        {children}
      </body>
    </html>
  );
}
