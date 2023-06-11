import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Header from "@components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="intro" className={styles.intro}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h1>Hello, I'm John Doe</h1>
              <h2>
                Digital Designer <br />
                and Web Developer <br />
                Based In Somewhere.
              </h2>
            </div>
            <div className={styles.introScroll}>
              <Link href="#about">Scroll For More</Link>
            </div>
            <div className={styles.introGrid}></div>
            <div className={styles.introPic}></div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div>
            <div className={styles.headingRow}>
              <div className={styles.headingColumn}>
                <h2>About Me</h2>
              </div>
            </div>
            <div className={styles.aboutMeRow}>
              <div className={styles.aboutMeColumn}>
                <p>
                  Nulla aspernatur nam et accusantium. Tempore delectus
                  dignissimos aut ab commodi. Labore et cupiditate temporibus
                  odio debitis eaque. Officia provident aut iste et dicta
                  perferendis. Velit iure adipisci. Molestiae qui fuga rerum
                  facilis.
                </p>
                <p>
                  Reprehenderit quia id facilis nihil odit perferendis fugiat
                  quidem voluptas. Non ratione tenetur. Quis earum quia deleniti
                  fugit fugiat minus omnis. Iure dolore dolorum. Aspernatur quos
                  cumque ea dolorum nemo nihil beatae magnam. Qui molestiae rem.
                  Maxime enim provident ipsum reprehenderit tenetur. Et
                  cupiditate repellendus. Et modi ipsum aut harum. Ratione
                  alias.
                </p>
                <p>
                  Rerum consequatur dolore quae. Qui excepturi facilis quam quae
                  quasi. Mollitia occaecati minus voluptas veniam. Qui excepturi
                  facilis quam quae quasi. Mollitia occaecati minus voluptas
                  veniam. Est est occaecati dolor qui aut et eum. Aspernatur
                  quos cumque ea dolorum nemo nihil beatae magnam. Qui molestiae
                  rem.
                </p>
                <p>
                  Maxime enim provident ipsum reprehenderit tenetur. Et
                  cupiditate repellendus. Et modi ipsum aut harum. Ratione alias
                  sed. Rerum consequatur dolore quae. Qui excepturi facilis quam
                  quae quasi. Mollitia occaecati minus voluptas veniam. Est est
                  occaecati dolor qui aut et eum. Aspernatur quos cumque ea
                  dolorum nemo nihil beatae magnam. Qui molestiae rem.
                  Aspernatur quos cumque ea dolorum nemo nihil. Qui molestiae
                  rem.
                </p>
              </div>
            </div>
            <div className={styles.aboutMeButtons}>
              <div>
                <a href="#0" className={styles.btnStroke}>
                  Hire Me
                </a>
              </div>
              <div>
                <a href="#0" className={styles.btnPrimary}>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">Services</section>
        <section id="works">Works</section>
        <section id="contact">Contact</section>
      </main>
    </>
  );
}

{
  /* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/>; */
}
