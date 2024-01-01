"use client";
import Header from "../components/header/header";
import Carousel from "../components/slider/slider";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Philosophy from "../components/philosophy/philosophy";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Philosophy />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
