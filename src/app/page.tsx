"use client";
import Header from "../components/header/header";
import Carousel from "../components/slider/slider";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Philosophy from "../components/philosophy/philosophy";
import SelectedWorks from "../components/selected-works/selected-works";
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
        <SelectedWorks />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
