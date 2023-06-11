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

          <div>
            <div className={styles.headingRow}>
              <div className={styles.headingColumn}>
                <h2>Work & Education</h2>
              </div>
            </div>
            <div className={styles.experienceRow}>
              <div className={styles.experienceColumn}>
                <div className={styles.timeline}>
                  <div className={styles.iconWrap}>
                    <span className={styles.workIcon}></span>
                  </div>
                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2018 - Present</p>
                      <h3 className={styles.name}>Awesome Studio</h3>
                      <h4>Lead Designer</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2017 - June 2018</p>
                      <h3 className={styles.name}>Super Cool Agency</h3>
                      <h4>Frontend Developer</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>March 2016 - June 2017</p>
                      <h3 className={styles.name}>Epic Design Studio</h3>
                      <h4>Frontend Developer</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.experienceColumn}>
                <div className={styles.timeline}>
                  <div className={styles.iconWrap}>
                    <span className={styles.educationIcon}></span>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2011 - June 2015</p>
                      <h3 className={styles.name}>University of Life</h3>
                      <h4>Master Degree</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2009 - June 2011</p>
                      <h3 className={styles.name}>State Design University</h3>
                      <h4>Bachelor Degree</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2005 - June 2009</p>
                      <h3 className={styles.name}>School of Hard Knocks</h3>
                      <h4>Bachelor Degree</h4>
                    </div>
                    <div className={styles.description}>
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>
                </div>
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
