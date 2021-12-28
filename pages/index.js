import Head from "next/head";
import About from "../components/screens/About";
import HomePage from "../components/screens/HomePage";
import Navbar from "../components/screens/NavBar";
import Service from "../components/screens/Service";
import Products from "../components/screens/Products";
import Contact from "../components/screens/Contact";
import Footer from "../components/screens/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/virtual");
    router.prefetch("/");
    router.prefetch("/arSandpit");
    router.prefetch("/arFilter");
    router.prefetch("/3dmodelling");
  }, [router]);

  return (
    <div>
      <Head>
        <title>CAREALITIES -Augmented Reality Company</title>
        <meta
          name="description"
          content="Welcome to CAREALITIES where your imagination invites you to create is almost limitless"
        />

        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-196220537-1`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-196220537-1', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Navbar />
      <HomePage />
      <About />
      <Service />

      <Products />

      <Contact />
      <Footer />
    </div>
  );
}
