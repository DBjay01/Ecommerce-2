import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientProvider } from "@/context/wixContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentalShops",
  description: "E-commerce application ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="7Y9V1zYu-uHKocFgwFyfvZkI3JpDCX7IOIQ5biqZdZk" />
        {/* Microsoft Clarity Integration */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qtk5e1685j");
            `,
          }}
        />
      </head>
      <body>
        <WixClientProvider>
          <Navbar />
          <div className="mt-16">{children}</div>
          <Footer />
          <WhatsAppButton /> {/* Add the WhatsApp button here */}
        </WixClientProvider>
      </body>
    </html>
  );
}


//   import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { WixClientContext, WixClientProvider } from "@/context/wixContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Gurom",
//   description: "E-commerce application ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <WixClientProvider>
//           <Navbar />
//           {children}
//           <Footer />
//         </WixClientProvider>
//       </body>
//     </html>
//   );
// }

