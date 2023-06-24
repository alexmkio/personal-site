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
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2017 - June 2018</p>
                      <h3 className={styles.name}>Super Cool Agency</h3>
                      <h4>Frontend Developer</h4>
                    </div>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>March 2016 - June 2017</p>
                      <h3 className={styles.name}>Epic Design Studio</h3>
                      <h4>Frontend Developer</h4>
                    </div>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
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
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2009 - June 2011</p>
                      <h3 className={styles.name}>State Design University</h3>
                      <h4>Bachelor Degree</h4>
                    </div>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>

                  <div className={styles.block}>
                    <div className={styles.bullet}></div>
                    <div className={styles.header}>
                      <p className={styles.timeframe}>July 2005 - June 2009</p>
                      <h3 className={styles.name}>School of Hard Knocks</h3>
                      <h4>Bachelor Degree</h4>
                    </div>
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className={styles.philosophy}>
          <div className={styles.overlay}></div>
          <div className={styles.headingRow}>
            <div className={styles.headingColumn}>
              <h2>Development Philosophy</h2>
              <p className={styles.sectionDescription}>
                My passion and goal is to help you make your business standout.
              </p>
            </div>
          </div>
          <div className={styles.philosophyList}>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>Brand Identity</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>Illustration</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>Web Design</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>Product Strategy</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>UI/UX Design</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
            <div className={styles.philosophyItemContainer}>
              <div className={styles.philosophyItemContent}>
                <h3>Mobile Design</h3>
                <p>
                  Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                  consequatur sit vel illum vel et a delectus. Vel sequi vitae
                  voluptatem perspiciatis eligendi. Voluptatibus optio natus
                  asperiores est commodi amet quia architecto. Dolores
                  necessitatibus et.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className={styles.selectedWorks}>
          <div className={styles.headingRow}>
            <div className={styles.headingColumn}>
              <h2>Selected Works</h2>
              <p className={styles.sectionDescription}>
                Here are some of my selected works I have done lately. Feel free
                to check them out.
              </p>
            </div>
          </div>

          <div className={styles.masonry}>
            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/city-building.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>City Building</h3>
                  <p className={styles.subtitle}>Branding</p>
                </div>
              </div>
            </div>

            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/the-beetle.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>The Beetle</h3>
                  <p className={styles.subtitle}>Web Development</p>
                </div>
              </div>
            </div>

            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/lamp.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>Lamp</h3>
                  <p className={styles.subtitle}>Web Design</p>
                </div>
              </div>
            </div>

            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/woodcraft.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>Woodcraft</h3>
                  <p className={styles.subtitle}>Web Design</p>
                </div>
              </div>
            </div>

            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/shutterbug.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>Shutterbug</h3>
                  <p className={styles.subtitle}>Branding</p>
                </div>
              </div>
            </div>

            <div className={styles.brick}>
              <div className={styles.item}>
                <div className={styles.thumb}>
                  <Link href="#intro">
                    <Image
                      src="/assets/images/fuji.jpg"
                      width={500}
                      height={500}
                      alt="alt text"
                    />
                  </Link>
                </div>
                <div className={styles.text}>
                  <h3 className={styles.title}>Fuji</h3>
                  <p className={styles.subtitle}>Web Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.headingRow}>
            <div className={styles.headingColumn}>
              <article>
                <p>
                  Molestiae incidunt consequatur quis ipsa autem nam sit enim
                  magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                  dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                  rem nihil nostrum. Laudantium quia consequatur molestias
                  delectus culpa.
                </p>
                <div className={styles.info}>
                  <Image
                    src="/assets/images/user-02.jpg"
                    width={300}
                    height={300}
                    alt="Author image"
                    className={styles.avatar}
                  />
                  <cite className={styles.cite}>
                    <strong>Tim Cook</strong>
                    <span>CEO, Apple</span>
                  </cite>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.headingRow}>
            <div className={styles.headingColumn}>
              <h2>Get In Touch</h2>
            </div>
          </div>
          <div className={styles.mainRow}>
            <div className={styles.mainColumn}>
              <p className={styles.email}>
                <a href="mailto:#0" target="_blank">hello@epitome.com</a>
              </p>
              <p className={styles.description}>
                I'm happy to connect, listen and help. Let's work together and
                build something awesome. Let's turn your idea to an even greater
                product. <a href="mailto:#0" target="_blank">Email Me</a>.
              </p>
            </div>
          </div>
          <div className={styles.infos}>
            <div className={styles.socialInfo}>
              <h3>Call Me</h3>
              <a href="tel:197-543-2345">+197 543 2345</a>
            </div>
            <div className={styles.professionalInfo}>
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="#0" title="Facebook">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#0" title="Twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#0" title="Instagram">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
