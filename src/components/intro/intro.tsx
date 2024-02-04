import styles from "./intro.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import Link from "next/link";
import dotPattern from "../../../public/assets/images/pattern-dot-grid.svg";
import heroPic from "../../../public/assets/images/hero-pic.webp";

export default function Intro() {
  return (
    <ReactScrollElement name="intro" className={styles.intro}>
      <div className={styles["intro-content"]}>
        <div className={styles["intro-text"]}>
          <h1>Hello, I'm Alex Kio</h1>
          <h2>
            Web Developer
            <br />
            Based In Florida
          </h2>
        </div>
        <div className={styles["intro-scroll"]}>
          <Link href="#about">Scroll For More</Link>
        </div>
        <div
          style={{
            backgroundImage: `url(${dotPattern.src})`,
          }}
          className={styles["intro-grid"]}
        />
        <div
          style={{
            backgroundImage: `url(${heroPic.src})`,
          }}
          className={styles["intro-pic"]}
        />
      </div>
    </ReactScrollElement>
  );
}
