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

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/virtual");
    router.prefetch("/");
    router.prefetch("/industries");
    router.prefetch("/model");
    router.prefetch("/filter");
  }, [router]);
  return (
    <div>
      <Head>
        <title>CAREALITIES</title>
        <meta
          name="description"
          content="Welcome to CAREALITIES where your imagination invites you to create is almost limitless"
        />
        <link rel="icon" href="/favicon.ico" />
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
