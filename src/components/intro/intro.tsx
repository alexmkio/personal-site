import styles from "./intro.module.scss";
import { Element as ReactScrollElement } from "react-scroll";
import Link from "next/link";

export default function Intro() {
  return (
    <ReactScrollElement name="intro" className={styles.intro}>
      <div className={styles.introContent}>
        <div className={styles.introText}>
          <h1>Hello, I'm Alex Kio</h1>
          <h2>
            Web Developer
            <br />
            Based In Florida
          </h2>
        </div>
        <div className={styles.introScroll}>
          <Link href="#about">Scroll For More</Link>
        </div>
        <div className={styles.introGrid}></div>
        <div className={styles.introPic}></div>
      </div>
    </ReactScrollElement>
  );
}
