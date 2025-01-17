"use client";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { store } from "@/Redux/store";
import { Provider, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import NetworkStatus from "@/components/sections/NetworkError";
import LayoutWithReduxState from "@/components/layout/layoutWithReduxState";
import { SITE_NAME } from "../../config";
import { selectPageByType } from "@/Redux/PagesContent/PagesContentSlice";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Favicon = () => {
  const SiteLogo = useSelector((state) => selectPageByType(state, "Site Logo"));
  return (
    SiteLogo && (
      <link rel="icon" href={SiteLogo?.image} sizes="any" type="image/webp" />
    )
  );
};

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>{SITE_NAME}</title>
          <Favicon />
        </head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-5MLLMDZ7');
            `,
          }}
        />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5MLLMDZ7"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <LayoutWithReduxState>{children}</LayoutWithReduxState>
          <ToastContainer />
          <NetworkStatus />
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
